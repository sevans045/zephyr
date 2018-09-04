/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');
const main = require('../main.js');

exports.run = (playerName, victimName, deathType, killerTeam) => {
    if(killerTeam == "GDI")
        main.IRCSay(config.mainChannel, `8${playerName} killed 4${victimName} (12${deathType}).`);
    else
        main.IRCSay(config.mainChannel, `4${playerName} killed 8${victimName} (12${deathType}).`);
}