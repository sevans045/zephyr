/**
 * Node.js modules
 */
import * as EventEmitter from "events";

/**
 * Third-party modules
 */
import * as ircPackage from "irc";

/**
 * Local imports
 */
import * as config from "../config.json";
import { Log } from "./Log";
import { DamageTypes } from "./models/DamageTypes";
import { VehicleTypes } from "./models/VehicleTypes";
import { BuildingTypes } from "./models/BuildingTypes";
import { GDICharacterTypes } from "./models/GDICharacterTypes";
import { NodCharacterTypes } from "./models/NodCharacterTypes";

export class RCONHandler {

    private IRC:ircPackage.Client;
    private renX:EventEmitter;

    constructor (private IRCin:ircPackage.Client, private renXIn: EventEmitter) {
        this.IRC = IRCin;
        this.renX = renXIn;
    }

    private IRCSay(channel:string, text:string) {
        this.IRC.say(channel, text);
    }

    public parse (args: Buffer): void {
        // Convert the object received from the connection to a string.  
        let dataStr = String(args);         

        // Non-stripped type.
        const nostripdata = dataStr.split("");

        // Strip the type ID.
        dataStr = dataStr.substr(1);  

        // Split the raw message into seperate strings, removing the delimiter.
        let dataArr:string[] = dataStr.split("");

        // Assign a 'type'. Enter, TeamJoin, Exit etc.
        const type = dataArr[1];

        this.simpleData(type, dataArr);

        this.IRCSay(config.mainChannel, dataArr.join(' ; '));
        if (dataArr[0].startsWith("Conn")){
            Log.log("Connection has been authenticated.".green);
        }
        else if (dataArr[0].startsWith("Invalid")){
            Log.error("Invalid password! Authentication failed.");
        }
        else if (nostripdata[0].startsWith("v")){
            Log.log(`RCON Version: ${dataArr[0]}`);
            Log.log(`Game Version: ${dataArr[1]}`);
            Log.log(`Game Friendly Version: ${dataArr[2]}`);
        }
    }

    private friendlyClass (ufClass:string): string {

        // DmgType_Explosive was part of the original list in this file. Might not be needed, just being safe. ~ Terekhov
        if (ufClass === 'DmgType_Explosive') {
            ufClass = 'Rx_DmgType_Explosive';
        }
        if (ufClass.startsWith("Rx_DmgType")) {
            return DamageTypes.get(ufClass);
        } else if (ufClass.startsWith("Rx_Vehicle")) {
            return VehicleTypes.get(ufClass);
        } else if (ufClass.startsWith("Rx_Building")) {
            return BuildingTypes.get(ufClass);
        } else if (ufClass.startsWith("Rx_FamilyInfo_GDI")) {
            return GDICharacterTypes.get(ufClass);
        } else if (ufClass.startsWith("Rx_FamilyInfo_Nod")) {
            return NodCharacterTypes.get(ufClass);
        }
        return "Unparsed Class: " + ufClass;
    }

    private simpleData (type:string, data:string[]) {
        // console.log('simpleData; args = ', arguments);
        if (type == "Enter;") {
            const split = data[2].split(",");
            const team = split[0];
            const playerID = split[1];
            var playerName = split[2];
            const playerIP = data[4];
            const steamID = data[8];
            this.renX.emit("enter", team, playerID, playerName, playerIP, steamID);
        }
        else if (type == "HWID;") {
            const upname = data[3];
            const split = data[2].split(",");
            const team = split[0];
            const username = upname.split(",");
            const HWID = data[5];
            //console.log(gameLog(`${username[2]} joined ${username[0]}. HWID: ${data[5]}`, team));
        }
        else if (type == "Subscribed;") {
            const cNumber = data[2].substr(4).trim(); //Extract the connection number.
            this.renX.emit("subscribed", cNumber);
        }
        else if (type == "TeamJoin;") {
            const action = data[5];
            const split = data[2].split(",");
            const team = split[0];
            const playerID = split[1];
            if (playerID.includes("b")){ playerName = "[B]" + playerName};
            var playerName = split[2];
            if (action == "left"){
                if(team == "GDI")
                    this.renX.emit("teamjoin", playerName, "GDI", true);
                else
                    this.renX.emit("teamjoin", playerName, "Nod", true);
            }
            else if (team == "GDI")
                this.renX.emit("teamjoin", playerName, "GDI", false);
            else 
                this.renX.emit("teamjoin", playerName, "Nod", false);
            
        }
        else if (type == "Exit;") {
            const split = data[2].split(",");
            var playerName = split[2].trim();
            const playerID = split[1];
            const team = split[0];
            if (playerID.includes("b")){ playerName = "[B]" + playerName};
            //console.log(gameLog(`${playerName} left the game.`, team));
        }
        else if (type == "Purchase;") {
            const split = data[data.length-1].split(",");
            var playerName = split[2].trim();
            const boughtClass = this.friendlyClass(data[3]);
            const team = split[0];
            const playerID = split[1];
            if (playerID.includes("b")){ playerName = "[B]" + playerName};
            if (data[2] == "refill") {
                //console.log(gameLog(`${playerName} purchased a refill.`, team));
            } else if (data[2] == "character" || "vehicle") {
                //console.log(gameLog(`${playerName} purchased a ${boughtClass}.`, team));
            }
        }
        else if (type == "Spawn;") {
            if (data[2] == "player" || "bot") {
                console.error(data);
                const split = data[3].split(",");
                const spawnClass = this.friendlyClass(data[data.length-1].trim());
                const playerID = split[1];
                const team = split[0];
                var playerName  = split[2];
                if (playerID.includes("b"))
                    playerName = "[B]" + playerName;

                if(data.length == 3 && data[2] == "bot")
                    this.renX.emit('spawn', playerName, "default", team);

                if (!data[3].includes("Harvester_")){ //Hopefully fix a crash with harvester spawning.
                    this.renX.emit('spawn', playerName, spawnClass, team);
                }
            } else if (data[2].includes("vehicle")){
            const split = data[3].split(",");
            if (split[1] == "Rx_Vehicle_Harvester_GDI\n"){
                this.renX.emit("harvyspawn", "GDI");
            } else if (split[1] == "Rx_Vehicle_Harvester_Nod\n"){
                this.renX.emit("harvyspawn", "Nod");
            }
            }
        }
        else if (type == "Death;") {
            if (data[2] == "player" || "bot"){
            const deathClass = this.friendlyClass(data[data.length-1].trim());
            const split = data[3].split(",");
            var playerName = split[2].trim();
            const playerID = split[1];
            const team = split[0];
            if (playerID.includes("b")){ playerName = "[B]" + playerName};
            if (data[4] == "suicide by"){
                this.renX.emit('suicide', playerName, deathClass, team);
            } else if (data[4] == "by"){
                const kSplit = data[5].split(",");
                var killerName = kSplit[2].trim();
                const killerPlayerID = kSplit[1];
                const team = kSplit[0];
                if (killerPlayerID.includes("b")){ killerName = "[B]" + killerName};
                this.renX.emit('kill', killerName, playerName, deathClass, team);
            }
            }
        }
        else if (type == "Destroyed;") {
            const deathClass = this.friendlyClass(data[data.length-1].trim());
            var destroyedClass = this.friendlyClass(data[3]);
            const split = data[5].split(",");
            const team = split[0];
            var killerName = split[2].trim();
            const killerID = split[1];
            if (killerID.includes("b")){ killerName = "[B]" + killerName};
            if (data[2].includes(("vehicle" || "emplacement" || "defence"))){
            //console.log(gameLog(`${killerName} destroyed a ${destroyedClass}. (${deathClass})`, team));
            } else {
            //console.log(gameLog(`${killerName} destroyed the ${destroyedClass}. (${deathClass})`, team));
            }
        }
        else if (type == "MatchEnd;") {
            const gdiScore = data[data.length-2].substr(4);
            const nodScore = data[data.length-1].substr(4);
            if (data[2].includes("tie")){
            console.log("The game ended in a tie.");
            } else if (data[3].includes("GDI" || "Nod")){ var winTeam = data[3];
            console.log(`${winTeam} won the match. GDI: ${gdiScore} Nod: ${nodScore}`);
            }

        }
        else if (type == "Start;") {
            const map = data[2].trim();
            console.log(`${map} has started.`);
        }
        else if (type == "Loaded;") {
            const map = data[2].trim();
            console.log(`Loaded ${map}...`);
        }
        else if (type == "Changing;") {
            const map = data[2].trim();
            console.log(`Loading ${map}...`);
        }
        else if (type == "Say;") {
            const split = data[2].split(",");
            const team = split[0];
            const player = split[2];
            const msg = data[4].slice(0, data[4].length - 1);

            this.renX.emit("say", player, msg, team);

        }
        else if (type == "TeamSay;") {
            const split = data[2].split(",");
            const team = split[0];
            const player = split[2];
            const msg = data[4].slice(0, data[4].length - 1);

            this.renX.emit("teamsay", player, msg, team);
        }
    }
}