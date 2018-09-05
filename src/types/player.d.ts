/**
 * Represents a player ingame
 */
export interface Player {
  name: string;
  id: string;
  class: string;
  team: string;
  isAdmin?: boolean;
  isDev?: boolean;
  isMod?: boolean;
  isBot?: boolean;
  permissionLevel: number;

  // Optional fields have question marks after
  optionalField?: number;
}