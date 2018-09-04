/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');

exports.run = (IRCSay, playerName, deathClass, team) => {
    if(team == "GDI")
        IRCSay(config.mainChannel, `8${playerName} died. (12${deathClass}).`);
    else
        IRCSay(config.mainChannel, `4${playerName} died. (12${deathClass}).`);
}