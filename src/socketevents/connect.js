/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');
const main = require('../main.js');

exports.run = (IRCSay) => {
    console.info(`Connection to ${config.host}:${config.port} successful.`);
    IRCSay(config.mainChannel, `9Connection to 9${config.host}:9${config.port} successful.`);
}
