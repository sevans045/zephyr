declare enum PrimaryHeader {
    
    ADMIN,
    CHAT,
    DEMO,

    // Error is currently unused, but was used in past and may be in future
    ERROR,

    GAME,
    MAP,
    PLAYER,
    RCON,
    VOTE
}

declare namespace SecondaryHeaders {

    enum Admin {

    }

    enum Chat {

    }

    enum Error {

    }

    enum Game {

    }

    enum Map {

    }

    enum Player {
        Enter,
        TeamJoin,
        HWID,
        Exit,
        Kick,
        NameChange,
        ChangeID,
        Rank,
        Dev,
        Command,
        SpeedHack
    }

    enum Rcon {

    }

    enum Vote {
        
    }
}