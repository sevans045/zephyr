/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');

exports.run = (IRCSay, cNumber) => {
    IRCSay(config.mainChannel, `9Subscribed as 9${cNumber}9.`);
}
