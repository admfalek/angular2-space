import { SpaceShip } from './space-ship';
import { Pilot } from '../pilots/pilot';

export class FighterShip extends SpaceShip {
    constructor(pilot?: Pilot) {
        super('Fighter', '/assets/viper/viper.png');
        this.pilot = pilot;
    }
}
