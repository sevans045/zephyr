/**
 * Map of damage types in Renegade X
 * Used to convert RCON damage types to human-friendly names
 */
export abstract class DamageTypes {

    public static get (type:string): string {
        return DamageTypes.types.get(type);
    }

    private static types:Map<string,string> = new Map([
        ["Rx_DmgType_RemoteC4", "Remote C4"],
        ["DmgType_Suicided", "Suicide"],
        ["Rx_DmgType_A10_Missile", "A10 Missile"],
        ["Rx_DmgType_AATower", "Anti-Air Tower"],
        ["Rx_DmgType_AGT_MG", "AGT Machine Guns"],
        ["Rx_DmgType_AGT_Rocket", "AGT Rockets"],
        ["Rx_DmgType_APC", "APC"],
        ["Rx_DmgType_APC_GDI", "GDI APC/M134 Minigun"],
        ["Rx_DmgType_APC_Nod", "Nod APC/M134 Minigun"],
        ["Rx_DmgType_ATMine", "Anti-Tank Mine"],
        ["Rx_DmgType_Abduction", "Abducted"],
        ["Rx_DmgType_Apache_Gun", "Apache/30mm Auto-Cannon"],
        ["Rx_DmgType_Apache_Passenger", "Apache Passenger Rocket"],
        ["Rx_DmgType_Apache_Rocket", "Apache/Hydra-70 Rockets"],
        ["Rx_DmgType_Artillery", "Mobile Artillery/155mm Howitzer"],
        ["Rx_DmgType_AutoRifle", "Auto Rifle"],
        ["Rx_DmgType_BarbedWire", "Barbed Wire"],
        ["Rx_DmgType_Buggy", "Buggy/.50 Caliber Machine Gun"],
        ["Rx_DmgType_Bullet", "Bullet"],
        ["Rx_DmgType_Burn", "Burn"],
        ["Rx_DmgType_BurnC4", "C4 Burn"],
        ["Rx_DmgType_Carbine", "Carbine"],
        ["Rx_DmgType_ChainGun", "Chain Gun"],
        ["Rx_DmgType_Chemical_Thrower", "Chemical Sprayer"],
        ["Rx_DmgType_Chinook", "Chinook"],
        ["Rx_DmgType_Chinook_GDI", "GDI Chinook/Gatling Guns"],
        ["Rx_DmgType_Chinook_Nod", "Nod Chinook/Gatling Guns"],
        ["Rx_DmgType_CruiseMissile", "Cruise Missile"],
        ["Rx_DmgType_Drowned", "Drowned"],
        ["Rx_DmgType_EMP", "EMP"],
        ["Rx_DmgType_EMPGrenade", "EMP Grenade"],
        ["Rx_DmgType_Explosive", "Explosive"],
        ["Rx_DmgType_Fell", "Fell"],
        ["Rx_DmgType_FireBleed", "Fire"],
        ["Rx_DmgType_FlakCannon", "Flak Cannon"],
        ["Rx_DmgType_FlakCannon_Alt", "Flak Cannon Alternate Fire"],
        ["Rx_DmgType_FlameTank", "Flame Tank/Flamethrowers"],
        ["Rx_DmgType_FlameThrower", "Flame Thrower"],
        ["Rx_DmgType_Grenade", "Grenade"],
        ["Rx_DmgType_GrenadeLauncher", "Grenade Launcher"],
        ["Rx_DmgType_GuardTower", "Guard Tower"],
        ["Rx_DmgType_GunEmpl", "Gun Emplacement"],
        ["Rx_DmgType_GunEmpl_Alt", "Gun Emplacement Alternate Fire"],
        ["Rx_DmgType_Headshot", "Headshot"],
        ["Rx_DmgType_HeavyPistol", "Heavy Pistol"],
        ["Rx_DmgType_HoverCraft_Cannon", "Hovercraft Cannon"],
        ["Rx_DmgType_HoverCraft_Rockets", "Hovercraft Rockets"],
        ["Rx_DmgType_Humvee", "Humvee/.50 Caliber Machine Gun"],
        ["Rx_DmgType_IonCannon", "Ion Cannon"],
        ["Rx_DmgType_LaserChainGun", "Laser Chain Gun"],
        ["Rx_DmgType_LaserRifle", "Laser Rifle"],
        ["Rx_DmgType_LightTank", "Light Tank/75mm Cannon"],
        ["Rx_DmgType_M2Bradley", "M2 Bradley"],
        ["Rx_DmgType_M2Bradley_Rocket", "M2 Bradley Rocket"],
        ["Rx_DmgType_MRLS", "MRLS/M269 Missiles"],
        ["Rx_DmgType_MammothTank_Cannon", "Mammoth Tank/120mm Cannon"],
        ["Rx_DmgType_MammothTank_Missile", "Mammoth Tank/Tusk Missile"],
        ["Rx_DmgType_MarksmanRifle", "Marksman Rifle"],
        ["Rx_DmgType_MediumTank", "Medium Tank/105mm Cannon"],
        ["Rx_DmgType_MissileLauncher", "Missile Launcher"],
        ["Rx_DmgType_MissileLauncher_Alt", "Missile Launcher Alternate Fire"],
        ["Rx_DmgType_Nuke", "Nuclear Strike"],
        ["Rx_DmgType_Obelisk", "Obelisk Laser"],
        ["Rx_DmgType_Orca_Gun", "Orca/.50 Caliber Machine Gun"],
        ["Rx_DmgType_Orca_Missile", "Orca/Hellfire  Missiles"],
        ["Rx_DmgType_Orca_Passenger", "Orca Passenger"],
        ["Rx_DmgType_Pancake", "Pancake"],
        ["Rx_DmgType_PersonalIonCannon", "Personal Ion Cannon"],
        ["Rx_DmgType_Pistol", "Pistol"],
        ["Rx_DmgType_ProxyC4", "Proximity C4"],
        ["Rx_DmgType_Railgun", "Railgun"],
        ["Rx_DmgType_RamjetRifle", "Ramjet Rifle"],
        ["Rx_DmgType_RanOver", "Ran Over"],
        ["Rx_DmgType_Rocket", "Rocket"],
        ["Rx_DmgType_RocketEmpl_Missile", "Rocket Emplacement Missile"],
        ["Rx_DmgType_RocketEmpl_Swarm", "Rocket Emplacement Swarm"],
        ["Rx_DmgType_RocketLauncher", "Rocket Launcher"],
        ["Rx_DmgType_SAMSite", "SAM Site"],
        ["Rx_DmgType_SMG", "SMG"],
        ["Rx_DmgType_Shell", "Shell"],
        ["Rx_DmgType_Shotgun", "Shotgun"],
        ["Rx_DmgType_SniperRifle", "Sniper Rifle"],
        ["Rx_DmgType_Special", "Special"],
        ["Rx_DmgType_StealthTank", "Stealth Tank/TOW Missiles"],
        ["Rx_DmgType_TacticalRifle", "Tactical Rifle"],
        ["Rx_DmgType_TacticalRifleGrenade", "Tactical Rifle Grenade"],
        ["Rx_DmgType_Tiberium", "Tiberium"],
        ["Rx_DmgType_TiberiumAutoRifle", "Tiberium Auto Rifle"],
        ["Rx_DmgType_TiberiumAutoRifle_Blue", "Blue Tiberium Auto Rifle"],
        ["Rx_DmgType_TiberiumAutoRifle_Flechette_Blue", "Blue Tiberium Auto Rifle"],
        ["Rx_DmgType_TiberiumBleed", "Tiberium Decay"],
        ["Rx_DmgType_TimedC4", "Timed C4"],
        ["Rx_DmgType_Turret", "Turret"],
        ["Rx_DmgType_VehicleMG", "Vehicle MG"],
        ["Rx_DmgType_VoltAutoRifle", "Volt Auto Rifle"],
        ["Rx_DmgType_VoltRifle_Alt", "Volt Auto Rifle"]
    ]);
}