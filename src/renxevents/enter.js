/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');
const main = require('../main.js');

exports.run = (team, pID, pName, pIP, pSteam) => {
    if(team == "GDI")
        main.IRCSay(config.mainChannel, `8${pName} joined the game, fighting for the 8Global Defense Initiative!`);
    else
        main.IRCSay(config.mainChannel, `8${pName} joined the game, fighting for the 4Brotherhood of Nod!`);
}