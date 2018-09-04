/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');
const main = require('../main.js');

exports.run = (playerName, team, bSwapped) => {
    if(bSwapped) {
        if(team == "GDI")
            main.IRCSay(config.mainChannel, `8${playerName} switched to 8GDI!`);
        else
            main.IRCSay(config.mainChannel, `4${playerName} switched to 4Nod!`);
    } else if(team == "GDI")
        main.IRCSay(config.mainChannel, `8${playerName} joined 8GDI!`);
    else
        main.IRCSay(config.mainChannel, `4${playerName} joined 4Nod!`);
}   