/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');
const main = require('../main.js');

exports.run = (IRCSay) => {
    console.error(`Connection to ${config.host}:${config.port} closed.`);
    IRCSay(config.mainChannel, `4Connection to4 ${config.host}4 :4 ${config.port}4 closed.`);
}
