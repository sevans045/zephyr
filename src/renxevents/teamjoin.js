/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');

exports.run = (IRCSay, playerName, team, bSwapped) => {
    if(bSwapped) {
        if(team == "GDI")
            IRCSay(config.mainChannel, `8${playerName} switched to 8GDI!`);
        else
            IRCSay(config.mainChannel, `4${playerName} switched to 4Nod!`);
    } else if(team == "GDI")
        IRCSay(config.mainChannel, `8${playerName} joined 8GDI!`);
    else
        IRCSay(config.mainChannel, `4${playerName} joined 4Nod!`);
}   