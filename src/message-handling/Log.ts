
import * as chalk from 'chalk';

export class Log {

  private static c = chalk.default;
  // Set logging colors
  // c.setTheme({
  //   data: "cyan",
  //   log: "yellow",
  //   debug: "blue",
  //   error: "red",
  //   debuf: "white",
  //   green: "green",
  //   GDI: "yellow"
  // });
  
  public static data (message?: any, ...optionalParams: any[]):void {
    console.info(this.c.cyan(message), optionalParams);
  }

  public static log (message?: any, ...optionalParams: any[]):void {
    console.info(this.c.yellow(message), optionalParams);
  }

  public static debug (message?: any, ...optionalParams: any[]):void {
    console.info(this.c.blue(message), optionalParams);
  }

  public static error (message?: any, ...optionalParams: any[]):void {
    console.error(this.c.red(message), optionalParams);
  }

  public static debuf (message?: any, ...optionalParams: any[]):void {
    console.info(this.c.white(message), optionalParams);
  }

  public static green (message?: any, ...optionalParams: any[]):void {
    console.info(this.c.green(message), optionalParams);
  }

  public static GDI (message?: any, ...optionalParams: any[]):void {
    console.info(this.c.yellow(message), optionalParams);
  }
}