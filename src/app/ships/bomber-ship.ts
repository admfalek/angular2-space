import { SpaceShip } from './space-ship';
import { Pilot } from '../pilots/pilot';

export class BomberShip extends SpaceShip {
    constructor(pilot?: Pilot) {
        super('Bomber', '/assets/viper/bomber.jpg');
        this.pilot = pilot;
    }
}
