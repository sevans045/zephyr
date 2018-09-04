
/**
 * Node.js modules
 */
import events = require("events");
import * as fs from "fs";
import * as net from "net";
import * as path from "path";


/**
 * Third-party modules
 */
import * as c from "colors";
import * as ircPackage from "irc";

/**
 * Local imports
 */
import * as config from "./config.json";
import { RCONHandler } from "./message-handling/RCONHandler";
import { Log } from "./message-handling/Log";

export class Main {

    private IRC: ircPackage.Client;
    private renX = new events.EventEmitter();
    private client: net.Socket;
    private rconHandler: RCONHandler;

    public startUp() {
        // Init IRC connection
        this.initIRC();

        // Connect to RCON
        this.connectToRcon();

        // Construct RCON handler now that we have IRC
        this.rconHandler = new RCONHandler(this.IRC, this.renX);

        // Init socket events
        this.initSocketEvents();
    }

    private initIRC() {
        this.IRC = new ircPackage.Client(config.IRCAddress, config.IRCUsername, {
            channels: ["#test"],
            port: config.IRCPort,
            realName: "I love Goks",
        });

        this.IRC.addListener("message", function (sender: any, to: any, message: any) {
            console.log(`${to} ${sender}: ${message instanceof String ? message : JSON.stringify(message)}`);
        });

        this.IRC.addListener("error", function (message: any) {
            console.log("IRC Error: " + (message instanceof String ? message : JSON.stringify(message)));
        });
    }

    private initSocketEvents() {
        let socketEventsDir = path.join(__dirname, 'socketevents');
        let renxEventsDir = path.join(__dirname, 'socketevents');

        // This loop reads the /socketevents/ folder and attaches each event file to the appropriate event.
        console.log('dirname = ', __dirname);
        fs.readdir(socketEventsDir, (err, files) => {
            if (err) return console.error(err);
            files.forEach(file => {
                let eventFunction = require(path.join(socketEventsDir, file));
                let eventName = file.split(".")[0];
                // super-secret recipe to call socketevents with all their proper arguments *after* the `client` var.
                this.client.on(eventName, (...args) => eventFunction.run(this.IRCSay.bind(this), ...args));
            });

            this.client.removeAllListeners("data");
            this.client.on("data", (...args) => this.rconHandler.parse(...args));
        });

        // This loop reads the /renxevents/ folder and attaches each event file to the appropriate event.
        fs.readdir(renxEventsDir, (err, files) => {
            if (err) return console.error(err);
            files.forEach(file => {
                let eventFunction = require(path.join(renxEventsDir, file));
                let eventName = file.split(".")[0];
                // super-secret recipe to call renxevents with all their proper arguments *after* the `renx` var.
                this.renX.on(eventName, (...args) => eventFunction.run(this.IRCSay.bind(this), ...args));
            });
        });
    }

    private connectToRcon() {
        this.client = new net.Socket();
        this.client.connect(config.port, config.host, () => {
            Log.log(`Loading Zephyr version ${config.version}...`);
            Log.log(`Initiating connection to ${config.host}:${config.port}.`);
            //Authenticate.
            Log.log("Attempting to authenticate.");
            this.client.write("a" + config.pass + "\n");
            //Subscribe to public log.
            Log.log("Subscribing to public log.");
            this.client.write("s\n");
        });

        //Watch for commands from the CLI or stdin
        process.stdin.resume();
        process.stdin.setEncoding("utf8");

        process.stdin.on("data", function (text) {
            if (text === "quit\n")
                this.client.destroy();
            else // \n is automatically appended when the user presses enter.
                this.client.write("c" + text);
        });
    }

    public IRCSay(channel: string, text: string) {
        this.IRC.say(channel, text);
    }
}

let m: Main = new Main();
m.startUp();