/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');
const main = require('../main.js');

exports.run = () => {
    console.info(`Connection to ${config.host}:${config.port} successful.`);
    main.IRCSay(config.mainChannel, `9Connection to 9${config.host}:9${config.port} successful.`);
}
