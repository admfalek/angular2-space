import { Pilot } from '../pilots/pilot';

export abstract class SpaceShip {
  modelName: string;
  imageUrl: string;
  health = 100;
  activeShields = true;
  activeWeapon = true;
  pilot: Pilot;

  constructor(modelName: string, imageUrl: string) {
    this.modelName = modelName;
    this.imageUrl = imageUrl;
  }
}
