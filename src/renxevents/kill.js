/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');

exports.run = (IRCSay, playerName, victimName, deathType, killerTeam) => {
    if(killerTeam == "GDI")
        IRCSay(config.mainChannel, `8${playerName} killed 4${victimName} (12${deathType}).`);
    else
        IRCSay(config.mainChannel, `4${playerName} killed 8${victimName} (12${deathType}).`);
}