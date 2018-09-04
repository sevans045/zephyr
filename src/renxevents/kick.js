/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');

exports.run = (IRCSay, playerName, kickReason, team) => {
    if(team == "GDI")
            IRCSay(config.mainChannel, `8${playerName} was 8kicked. (8${kickReason})`);
        else
            IRCSay(config.mainChannel, `4${playerName} was 8kicked. (8${kickReason})`);
}