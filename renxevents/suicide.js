/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');
const main = require('../main.js');

exports.run = (playerName, deathClass, team) => {
    if(team == "GDI")
        main.IRCSay(config.mainChannel, `8${playerName} died. (12${deathClass}).`);
    else
        main.IRCSay(config.mainChannel, `4${playerName} died. (12${deathClass}).`);
}