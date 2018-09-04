/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');

exports.run = (IRCSay, team) => {
    if(team == "GDI")
        IRCSay(config.mainChannel, `A 8GDI Harvester spawned.`);
    else
        IRCSay(config.mainChannel, `A 4Nod Harvester spawned.`);
}