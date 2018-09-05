/**
 * Map of GDI character types in Renegade X
 * Used to convert RCON GDI character types to human-friendly names
 */
export abstract class GDICharacterTypes {

    public static get (type:string): string {
        return GDICharacterTypes.types.get(type);
    }

    private static types:Map<string,string> = new Map([
        ["Rx_FamilyInfo_GDI_Engineer", "GDI Engineer"],
        ["Rx_FamilyInfo_GDI_Grenadier", "Grenadier"],
        ["Rx_FamilyInfo_GDI_Gunner", "Gunner"],
        ["Rx_FamilyInfo_GDI_Havoc", "Havoc"],
        ["Rx_FamilyInfo_GDI_Hotwire", "Hotwire"],
        ["Rx_FamilyInfo_GDI_Marksman", "GDI Marksman"],
        ["Rx_FamilyInfo_GDI_McFarland", "McFarland"],
        ["Rx_FamilyInfo_GDI_Mobius", "Mobius"],
        ["Rx_FamilyInfo_GDI_Officer", "GDI Officer"],
        ["Rx_FamilyInfo_GDI_Patch", "Patch"],
        ["Rx_FamilyInfo_GDI_RocketSoldier", "GDI Rocket Soldier"],
        ["Rx_FamilyInfo_GDI_Shotgunner", "GDI Shotgunner"],
        ["Rx_FamilyInfo_GDI_Soldier", "GDI Soldier"],
        ["Rx_FamilyInfo_GDI_Sydney", "Sydney"]
    ]);
}