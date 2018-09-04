
/**
 * Node.js modules
 */
import * as EventEmitter from 'events';
import * as fs from 'fs';
import * as net from 'net';


/**
 * Third-party modules
 */
import * as c from 'colors';
import * as ircPackage from 'irc';

/**
 * Local imports
 */
import * as config from './config.json';
import { ProcessRawData } from './message-handling/ProcessRawData';
import { Log } from './message-handling/Log';

export class Main {

  private renX:EventEmitter;
  private client:net.Socket;

  public startUp () {
    // Init IRC connection
    this.initIRC();

    // Init socket events
    this.initSocketEvents();

    // Connect to RCON
    this.connectToRcon();
  }

  private initIRC () {
    var IRC = new ircPackage.Client(config.IRCAddress, config.IRCUsername, {
      channels: ['#test'],
      port: config.IRCPort,
      realName: "I love Goks",
    });

    IRC.addListener('message', function (sender:string, to:string, message:string) {
        console.log(`${to} ${sender}: ${message}`);
    });
  
    IRC.addListener('error', function (message:string) {
        console.log("IRC Error: " + message);
    });
  }

  private initSocketEvents () {
    // This loop reads the /socketevents/ folder and attaches each event file to the appropriate event.
    fs.readdir("./socketevents/", (err, files) => {
      if (err) return console.error(err);
      files.forEach(file => {
          let eventFunction = require(`./socketevents/${file}`);
          let eventName = file.split(".")[0];
      // super-secret recipe to call socketevents with all their proper arguments *after* the `client` var.
          this.client.on(eventName, (...args) => eventFunction.run(...args));
      });
      
      this.client.removeAllListeners("data");
      this.client.on("data", (...args) => ProcessRawData.parse(...args));
    });

    // This loop reads the /renxevents/ folder and attaches each event file to the appropriate event.
    this.renX = new NodeJS.EventEmitter();
    fs.readdir("./renxevents/", (err, files) => {
      if (err) return console.error(err);
      files.forEach(file => {
          let eventFunction = require(`./renxevents/${file}`);
          let eventName = file.split(".")[0];
          // super-secret recipe to call renxevents with all their proper arguments *after* the `renx` var.
          this.renX.on(eventName, (...args) => eventFunction.run(...args));
      });
    });
  }

  private connectToRcon () {
    var client = new net.Socket();
    client.connect(config.port, config.host, function() {
        Log.log(`Loading Zephyr version ${config.version}...`);
        Log.log(`Initiating connection to ${config.host}:${config.port}.`);
        //Authenticate.
        Log.log("Attempting to authenticate.");
        client.write("a" + config.pass + "\n");
        //Subscribe to public log.
        Log.log("Subscribing to public log.");
        client.write("s\n");
    });
    
    function RXEmit(eventName: string | symbol, ...args: any[]) {
      this.renX.emit(eventName, ...args);
    }
    
    //Watch for commands from the CLI or stdin
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    
    process.stdin.on("data", function(text) {
     if (text === "quit\n")
            client.destroy();
        else // \n is automatically appended when the user presses enter.
            client.write("c" + text);
    });
  }

}

let m:Main = new Main();