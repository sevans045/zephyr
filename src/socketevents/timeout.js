/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');
const main = require('../main.js');

exports.run = (IRCSay) => {
  console.error(`Connection to ${config.host}:${config.port} timed out.`);
}
