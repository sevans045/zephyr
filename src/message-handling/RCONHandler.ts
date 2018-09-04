
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
        
        // Enable me to have all messages displayed.
        // console.log(data);    

        // Non-stripped type.
        const nostripdata = dataStr.split("");

        // Strip the type ID.
        dataStr = dataStr.substr(1);  

        // Split the raw message into seperate strings, removing the delimiter.
        let dataArr:string[] = dataStr.split("");

        // Assign a 'type'. Enter, TeamJoin, Exit etc.
        const type = dataArr[1];

        this.simpleData(type, dataArr);

        if (dataArr[0].startsWith("Conn")){
            console.info("Connection has been authenticated.".green);
            this.IRCSay(config.mainChannel, "9Connection has been authenticated.");
        }
        else if (dataArr[0].startsWith("Invalid")){
            Log.error("Invalid password! Authentication failed.");
        }
        else if (nostripdata[0].startsWith("v")){
            this.IRCSay(config.mainChannel, `RCON Version: ${dataArr[0]}`);
            this.IRCSay(config.mainChannel, `Game Version: ${dataArr[1]}`);
            this.IRCSay(config.mainChannel, `Game Friendly Version: ${dataArr[2]}`);
        }
    }

    private friendlyClass (ufClass:string): string {
        switch (ufClass) {
            //DmgTypes
        case "Rx_DmgType_RemoteC4":
            return "Remote C4";
        case "DmgType_Suicided":
            return "Suicide";
        case "Rx_DmgType_A10_Missile":
            return "A10 Missile";
        case "Rx_DmgType_AATower":
            return "Anti-Air Tower";
        case "Rx_DmgType_AGT_MG":
            return "AGT Machine Guns";
        case "Rx_DmgType_AGT_Rocket":
            return "AGT Rockets";
        case "Rx_DmgType_APC":
            return "APC";
        case "Rx_DmgType_APC_GDI":
            return "GDI APC/M134 Minigun";
        case "Rx_DmgType_APC_Nod":
            return "Nod APC/M134 Minigun";
        case "Rx_DmgType_ATMine":
            return "Anti-Tank Mine";
        case "Rx_DmgType_Abduction":
            return "Abducted";
        case "Rx_DmgType_Apache_Gun":
            return "Apache/30mm Auto-Cannon";
        case "Rx_DmgType_Apache_Passenger":
            return "Apache Passenger Rocket";
        case "Rx_DmgType_Apache_Rocket":
            return "Apache/Hydra-70 Rockets";
        case "Rx_DmgType_Artillery":
            return "Mobile Artillery/155mm Howitzer";
        case "Rx_DmgType_AutoRifle":
            return "Auto Rifle";
        case "Rx_DmgType_BarbedWire":
            return "Barbed Wire";
        case "Rx_DmgType_Buggy":
            return "Buggy/.50 Caliber Machine Gun";
        case "Rx_DmgType_Bullet":
            return "Bullet";
        case "Rx_DmgType_Burn":
            return "Burn";
        case "Rx_DmgType_BurnC4":
            return "C4 Burn";
        case "Rx_DmgType_Carbine":
            return "Carbine";
        case "Rx_DmgType_ChainGun":
            return "Chain Gun";
        case "Rx_DmgType_Chemical_Thrower":
            return "Chemical Sprayer";
        case "Rx_DmgType_Chinook":
            return "Chinook";
        case "Rx_DmgType_Chinook_GDI":
            return "GDI Chinook/Gatling Guns";
        case "Rx_DmgType_Chinook_Nod":
            return "Nod Chinook/Gatling Guns";
        case "Rx_DmgType_CruiseMissile":
            return "Cruise Missile";
        case "Rx_DmgType_Drowned":
            return "Drowned";
        case "Rx_DmgType_EMP":
            return "EMP";
        case "Rx_DmgType_EMPGrenade":
            return "EMP Grenade";
        case "DmgType_Explosive":
            return "Explosive";
        case "Rx_DmgType_Fell":
            return "Fell";
        case "Rx_DmgType_FireBleed":
            return "Fire";
        case "Rx_DmgType_FlakCannon":
            return "Flak Cannon";
        case "Rx_DmgType_FlakCannon_Alt":
            return "Flak Cannon Alternate Fire";
        case "Rx_DmgType_FlameTank":
            return "Flame Tank/Flamethrowers";
        case "Rx_DmgType_FlameThrower":
            return "Flame Thrower";
        case "Rx_DmgType_Grenade":
            return "Grenade";
        case "Rx_DmgType_GrenadeLauncher":
            return "Grenade Launcher";
        case "Rx_DmgType_GuardTower":
            return "Guard Tower";
        case "Rx_DmgType_GunEmpl":
            return "Gun Emplacement";
        case "Rx_DmgType_GunEmpl_Alt":
            return "Gun Emplacement Alternate Fire";
        case "Rx_DmgType_Headshot":
            return "Headshot";
        case "Rx_DmgType_HeavyPistol":
            return "Heavy Pistol";
        case "Rx_DmgType_HoverCraft_Cannon":
            return "Hovercraft Cannon";
        case "Rx_DmgType_HoverCraft_Rockets":
            return "Hovercraft Rockets";
        case "Rx_DmgType_Humvee":
            return "Humvee/.50 Caliber Machine Gun";
        case "Rx_DmgType_IonCannon":
            return "Ion Cannon";
        case "Rx_DmgType_LaserChainGun":
            return "Laser Chain Gun";
        case "Rx_DmgType_LaserRifle":
            return "Laser Rifle";
        case "Rx_DmgType_LightTank":
            return "Light Tank/75mm Cannon";
        case "Rx_DmgType_M2Bradley":
            return "M2 Bradley";
        case "Rx_DmgType_M2Bradley_Rocket":
            return "M2 Bradley Rocket";
        case "Rx_DmgType_MRLS":
            return "MRLS/M269 Missiles";
        case "Rx_DmgType_MammothTank_Cannon":
            return "Mammoth Tank/120mm Cannon";
        case "Rx_DmgType_MammothTank_Missile":
            return "Mammoth Tank/Tusk Missile";
        case "Rx_DmgType_MarksmanRifle":
            return "Marksman Rifle";
        case "Rx_DmgType_MediumTank":
            return "Medium Tank/105mm Cannon";
        case "Rx_DmgType_MissileLauncher":
            return "Missile Launcher";
        case "Rx_DmgType_MissileLauncher_Alt":
            return "Missile Launcher Alternate Fire";
        case "Rx_DmgType_Nuke":
            return "Nuclear Strike";
        case "Rx_DmgType_Obelisk":
            return "Obelisk Laser";
        case "Rx_DmgType_Orca_Gun":
            return "Orca/.50 Caliber Machine Gun";
        case "Rx_DmgType_Orca_Missile":
            return "Orca/Hellfire  Missiles";
        case "Rx_DmgType_Orca_Passenger":
            return "Orca Passenger";
        case "Rx_DmgType_Pancake":
            return "Pancake";
        case "Rx_DmgType_PersonalIonCannon":
            return "Personal Ion Cannon";
        case "Rx_DmgType_Pistol":
            return "Pistol";
        case "Rx_DmgType_ProxyC4":
            return "Proximity C4";
        case "Rx_DmgType_Railgun":
            return "Railgun";
        case "Rx_DmgType_RamjetRifle":
            return "Ramjet Rifle";
        case "Rx_DmgType_RanOver":
            return "Ran Over";
        case "Rx_DmgType_Rocket":
            return "Rocket";
        case "Rx_DmgType_RocketEmpl_Missile":
            return "Rocket Emplacement Missile";
        case "Rx_DmgType_RocketEmpl_Swarm":
            return "Rocket Emplacement Swarm";
        case "Rx_DmgType_RocketLauncher":
            return "Rocket Launcher";
        case "Rx_DmgType_SAMSite":
            return "SAM Site";
        case "Rx_DmgType_SMG":
            return "SMG";
        case "Rx_DmgType_Shell":
            return "Shell";
        case "Rx_DmgType_Shotgun":
            return "Shotgun";
        case "Rx_DmgType_SniperRifle":
            return "Sniper Rifle";
        case "Rx_DmgType_Special":
            return "Special";
        case "Rx_DmgType_StealthTank":
            return "Stealth Tank/TOW Missiles";
        case "Rx_DmgType_TacticalRifle":
            return "Tactical Rifle";
        case "Rx_DmgType_TacticalRifleGrenade":
            return "Tactical Rifle Grenade";
        case "Rx_DmgType_Tiberium":
            return "Tiberium";
        case "Rx_DmgType_TiberiumAutoRifle":
            return "Tiberium Auto Rifle";
        case "Rx_DmgType_TiberiumAutoRifle_Blue":
            return "Blue Tiberium Auto Rifle";
        case "Rx_DmgType_TiberiumAutoRifle_Flechette_Blue":
            return "Blue Tiberium Auto Rifle";
        case "Rx_DmgType_TiberiumBleed":
            return "Tiberium Decay";
        case "Rx_DmgType_TimedC4":
            return "Timed C4";
        case "Rx_DmgType_Turret":
            return "Turret";
        case "Rx_DmgType_VehicleMG":
            return "Vehicle MG";
        case "Rx_DmgType_VoltAutoRifle":
            return "Volt Auto Rifle";
        case "Rx_DmgType_VoltRifle_Alt":
            return "Volt Auto Rifle";


        //Vehicles
        case "Rx_Vehicle_MediumTank":
            return "Medium Tank";
        case "Rx_Vehicle_A10":
            return "A10";
        case "Rx_Vehicle_AC130":
            return "AC130";
        case "Rx_Vehicle_APC_GDI":
            return "GDI APC";
        case "Rx_Vehicle_APC_Nod":
            return "Nod APC";
        case "Rx_Vehicle_Apache":
            return "Apache";
        case "Rx_Vehicle_Artillery":
            return "Mobile Artillery";
        case "Rx_Vehicle_Buggy":
            return "Buggy";
        case "Rx_Vehicle_Bus":
            return "Bus";
        case "Rx_Vehicle_C130":
            return "C130";
        case "Rx_Vehicle_FlameTank":
            return "Flame Tank";
        case "Rx_Vehicle_Harvester_GDI":
            return "GDI Harvester";
        case "Rx_Vehicle_Harvester_Nod":
            return "Nod Harvester";
        case "Rx_Vehicle_Hovercraft":
            return "Hovercraft";
        case "Rx_Vehicle_Humvee":
            return "Humvee";
        case "Rx_Vehicle_LightTank":
            return "Light Tank";
        case "Rx_Vehicle_M2Bradley":
            return "M2 Bradley";
        case "Rx_Vehicle_MRLS":
            return "MRLS";
        case "Rx_Vehicle_MammothTank":
            return "Mammoth Tank";
        case "Rx_Vehicle_Mig35":
            return "Mig35";
        case "Rx_Vehicle_Orca":
            return "Orca";
        case "Rx_Vehicle_StealthTank":
            return "Stealth Tank";

        //Buildings
        case "Rx_Building_Refinery_Nod":
            return "Nod Refinery";
        case "Rx_Building_PowerPlant_Nod":
            return "Nod Power Plant";
        case "Rx_Building_HandOfNod_Internals":
            return "Hand of Nod";
        case "Rx_Building_AirStrip_Internals":
            return "Airstrip";
        case "Rx_Building_PowerPlant_GDI_Internals":
            return "GDI Power Plant";
        case "Rx_Building_WeaponsFactory_Internals":
            return "Weapons Factory";
        case "Rx_Building_Refinery_GDI_Internals":
            return "GDI Refinery";

        //FamilyInfo

            //GDI
        case "Rx_FamilyInfo_GDI_Engineer":
            return "GDI Engineer";
        case "Rx_FamilyInfo_GDI_Grenadier":
            return "Grenadier";
        case "Rx_FamilyInfo_GDI_Gunner":
            return "Gunner";
        case "Rx_FamilyInfo_GDI_Havoc":
            return "Havoc";
        case "Rx_FamilyInfo_GDI_Hotwire":
            return "Hotwire";
        case "Rx_FamilyInfo_GDI_Marksman":
            return "GDI Marksman";
        case "Rx_FamilyInfo_GDI_McFarland":
            return "McFarland";
        case "Rx_FamilyInfo_GDI_Mobius":
            return "Mobius";
        case "Rx_FamilyInfo_GDI_Officer":
            return "GDI Officer";
        case "Rx_FamilyInfo_GDI_Patch":
            return "Patch";
        case "Rx_FamilyInfo_GDI_RocketSoldier":
            return "GDI Rocket Soldier";
        case "Rx_FamilyInfo_GDI_Shotgunner":
            return "GDI Shotgunner";
        case "Rx_FamilyInfo_GDI_Soldier":
            return "GDI Soldier";
        case "Rx_FamilyInfo_GDI_Sydney":
            return "Sydney";

            //Nod
        case "Rx_FamilyInfo_Nod_BlackHandSniper":
            return "Black Hand Sniper";
        case "Rx_FamilyInfo_Nod_ChemicalTrooper":
            return "Chem Trooper";
        case "Rx_FamilyInfo_Nod_Engineer":
            return "Nod Engineer";
        case "Rx_FamilyInfo_Nod_FlameTrooper":
            return "Flame Trooper";
        case "Rx_FamilyInfo_Nod_LaserChainGunner":
            return "Laser Chain Gunner";
        case "Rx_FamilyInfo_Nod_Marksman":
            return "Nod Marksman";
        case "Rx_FamilyInfo_Nod_Mendoza":
            return "Mendoza";
        case "Rx_FamilyInfo_Nod_Officer":
            return "Nod Officer";
        case "Rx_FamilyInfo_Nod_Raveshaw":
            return "Raveshaw";
        case "Rx_FamilyInfo_Nod_RocketSoldier":
            return "Nod Rocket Soldier";
        case "Rx_FamilyInfo_Nod_Sakura":
            return "Sakura";
        case "Rx_FamilyInfo_Nod_Shotgunner":
            return "Nod Shotgunner";
        case "Rx_FamilyInfo_Nod_Soldier":
            return "Nod Soldier";
        case "Rx_FamilyInfo_Nod_Technician":
            return "Technician";
        case "Rx_FamilyInfo_Nod_StealthBlackHand":
            return "Stealth Black Hand";

        default:
            return "Unparsed Class: " + ufClass;
        }
    }

    private simpleData (type:string, data:string[]) {
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