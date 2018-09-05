/**
 * Map of vehicle types in Renegade X
 * Used to convert RCON vehicle types to human-friendly names
 */
export abstract class VehicleTypes {

    public static get (type:string): string {
        return VehicleTypes.types.get(type);
    }

    private static types:Map<string,string> = new Map([
        ["Rx_Vehicle_MediumTank", "Medium Tank"],
        ["Rx_Vehicle_A10", "A10"],
        ["Rx_Vehicle_AC130", "AC130"],
        ["Rx_Vehicle_APC_GDI", "GDI APC"],
        ["Rx_Vehicle_APC_Nod", "Nod APC"],
        ["Rx_Vehicle_Apache", "Apache"],
        ["Rx_Vehicle_Artillery", "Mobile Artillery"],
        ["Rx_Vehicle_Buggy", "Buggy"],
        ["Rx_Vehicle_Bus", "Bus"],
        ["Rx_Vehicle_C130", "C130"],
        ["Rx_Vehicle_FlameTank", "Flame Tank"],
        ["Rx_Vehicle_Harvester_GDI", "GDI Harvester"],
        ["Rx_Vehicle_Harvester_Nod", "Nod Harvester"],
        ["Rx_Vehicle_Hovercraft", "Hovercraft"],
        ["Rx_Vehicle_Humvee", "Humvee"],
        ["Rx_Vehicle_LightTank", "Light Tank"],
        ["Rx_Vehicle_M2Bradley", "M2 Bradley"],
        ["Rx_Vehicle_MRLS", "MRLS"],
        ["Rx_Vehicle_MammothTank", "Mammoth Tank"],
        ["Rx_Vehicle_Mig35", "Mig35"],
        ["Rx_Vehicle_Orca", "Orca"],
        ["Rx_Vehicle_StealthTank", "Stealth Tank"]
    ]);
}