/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');

exports.run = (IRCSay, player, text, team) => {
    if(team == "GDI")
        IRCSay(config.mainChannel, `8${player}: 8${text}`);
    else
        IRCSay(config.mainChannel, `4${player}: 4${text}`);
}
