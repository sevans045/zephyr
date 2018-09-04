/*
Sarah 'taisho' Evans
© 2018
taisho.xyz
*/

const config = require('../config.json');

exports.run = (IRCSay, team, pID, pName, pIP, pSteam) => {
    if(team == "GDI")
        IRCSay(config.mainChannel, `8${pName} joined the game, fighting for the 8Global Defense Initiative!`);
    else
        IRCSay(config.mainChannel, `8${pName} joined the game, fighting for the 4Brotherhood of Nod!`);
}