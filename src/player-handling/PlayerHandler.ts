/**
 * Local imports
 */
import * as config from "../config.json";
import { Log } from "../message-handling/Log";
import { Player } from "player";

export class PlayerHandler {

    /**
     * The string key is the Player's ID
     */
    private players: Map<String, Player> = new Map<String, Player>();

    constructor () {
        // Could have done initialiation of players Map here
        // When Typescript compiles, it would have amounted to the same Javascript output
    }

    /**
     * Adds the specified player to the Map of players
     * Allows chaining
     * 
     * @param player If player already exists in the list, overwrite old info with new info from the paramter
     */
    public addPlayer (player: Player): PlayerHandler {
        if (player) {
            this.players.set(player.id, player);
        }
        // By returning 'this', we can chain calls; ex: playerHandler.add(player1).add(player2)
        return this;
    }

    /**
     * Allows chaining
     * 
     * @param id Player to remove from current Map of players
     */
    public removePlayerWithId (id: string): PlayerHandler {
        this.players.delete(id);
        return this;
    }

    public findPlayerById (id: string): Player {
        return this.players.get(id);
    }
}
