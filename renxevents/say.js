/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');
const main = require('../main.js');

exports.run = (player, text, team) => {
    if(team == "GDI")
        main.IRCSay(config.mainChannel, `8${player}: ${text}`);
    else
        main.IRCSay(config.mainChannel, `4${player}: ${text}`);
}
