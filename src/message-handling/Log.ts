
import * as chalk from 'chalk';

export class Log {

  private static c = chalk.default;
  
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

  public static green (message?: any, ...optionalParams: any[]):void {
    console.info(this.c.green(message), optionalParams);
  }

}