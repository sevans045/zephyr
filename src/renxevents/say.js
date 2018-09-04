/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');

exports.run = (player, text, team) => {
    if(team == "GDI")
        IRCSay(config.mainChannel, `8${player}: ${text}`);
    else
        IRCSay(config.mainChannel, `4${player}: ${text}`);
}
