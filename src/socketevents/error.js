/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require("../config.json");

exports.run = (IRCSay, error) => {
  if(error.code == "ECONNREFUSED"){
    console.error(`${error.code}: ${config.host}:${config.port} refused connection. Make sure a server is running or that the host & port are correct.`);
  }
}
