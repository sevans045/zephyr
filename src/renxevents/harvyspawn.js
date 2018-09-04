/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');
const main = require('../main.js');

exports.run = (team) => {
    if(team == "GDI")
        main.IRCSay(config.mainChannel, `A 8GDI Harvester spawned.`);
    else
        main.IRCSay(config.mainChannel, `A 4Nod Harvester spawned.`);
}