/**
 * Map of buliding types in Renegade X
 * Used to convert RCON buliding types to human-friendly names
 */
export abstract class BuildingTypes {

    public static get (type:string): string {
        return BuildingTypes.types.get(type);
    }

    private static types:Map<string,string> = new Map([
        ["Rx_Building_Refinery_Nod", "Nod Refinery"],
        ["Rx_Building_PowerPlant_Nod", "Nod Power Plant"],
        ["Rx_Building_HandOfNod_Internals", "Hand of Nod"],
        ["Rx_Building_AirStrip_Internals", "Airstrip"],
        ["Rx_Building_PowerPlant_GDI_Internals", "GDI Power Plant"],
        ["Rx_Building_WeaponsFactory_Internals", "Weapons Factory"],
        ["Rx_Building_Refinery_GDI_Internals", "GDI Refinery"]
    ]);
}