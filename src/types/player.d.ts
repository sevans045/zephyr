/**
 * Represents a player ingame
 */
export interface Player {
  name: string;
  id: string;
  class: string;
  team: string;

  // Optional fields have question marks after
  optionalField?: number;
}