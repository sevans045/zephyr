/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');
const main = require('../main.js');

exports.run = (cNumber) => {
    main.IRCSay(config.mainChannel, `9Subscribed as 9${cNumber}9.`);
}
