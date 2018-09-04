/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');
const main = require('../main.js');

exports.run = (playerName, spawnClass, team) => {
    playerName = playerName.trim();

    if(spawnClass == "default")
        if(team == "GDI")
            main.IRCSay(config.mainChannel, `8${playerName} spawned as a 8GDI Soldier.`);
        else
        main.IRCSay(config.mainChannel, `4${playerName} spawned as a 4Nod Soldier.`);

    if(team == "GDI")
        main.IRCSay(config.mainChannel, `8${playerName} spawned as a 8${spawnClass}.`);
    else
        main.IRCSay(config.mainChannel, `4${playerName} spawned as a 4${spawnClass}.`);
}