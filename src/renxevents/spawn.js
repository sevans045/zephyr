/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');

exports.run = (IRCSay, playerName, spawnClass, team) => {
    playerName = playerName.trim(); // We do this to remove the \n at the end of playerName.

    if(spawnClass == "default") // This means they are a bot.
        if(team == "GDI")
            IRCSay(config.mainChannel, `8${playerName} online.`);
        else
            IRCSay(config.mainChannel, `4${playerName} online.`);

    if(team == "GDI")
        IRCSay(config.mainChannel, `8${playerName} spawned as a 8${spawnClass}.`);
    else
        IRCSay(config.mainChannel, `4${playerName} spawned as a 4${spawnClass}.`);
}