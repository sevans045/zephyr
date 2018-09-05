/**
 * Map of Nod character types in Renegade X
 * Used to convert RCON Nod character types to human-friendly names
 */
export abstract class NodCharacterTypes {

    public static get (type:string): string {
        return NodCharacterTypes.types.get(type);
    }

    private static types:Map<string,string> = new Map([
        ["Rx_FamilyInfo_Nod_BlackHandSniper", "Black Hand Sniper"],
        ["Rx_FamilyInfo_Nod_ChemicalTrooper", "Chem Trooper"],
        ["Rx_FamilyInfo_Nod_Engineer", "Nod Engineer"],
        ["Rx_FamilyInfo_Nod_FlameTrooper", "Flame Trooper"],
        ["Rx_FamilyInfo_Nod_LaserChainGunner", "Laser Chain Gunner"],
        ["Rx_FamilyInfo_Nod_Marksman", "Nod Marksman"],
        ["Rx_FamilyInfo_Nod_Mendoza", "Mendoza"],
        ["Rx_FamilyInfo_Nod_Officer", "Nod Officer"],
        ["Rx_FamilyInfo_Nod_Raveshaw", "Raveshaw"],
        ["Rx_FamilyInfo_Nod_RocketSoldier", "Nod Rocket Soldier"],
        ["Rx_FamilyInfo_Nod_Sakura", "Sakura"],
        ["Rx_FamilyInfo_Nod_Shotgunner", "Nod Shotgunner"],
        ["Rx_FamilyInfo_Nod_Soldier", "Nod Soldier"],
        ["Rx_FamilyInfo_Nod_Technician", "Technician"],
        ["Rx_FamilyInfo_Nod_StealthBlackHand", "Stealth Black Hand"]
    ]);
}