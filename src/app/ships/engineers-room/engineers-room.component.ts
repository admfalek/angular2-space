import { Component } from '@angular/core';
import { SpaceShipType } from '../space-ship-type';
import { SpaceShipFormValues } from '../space-ship-form-values';
import { SpaceShipService } from '../space-ship.service';

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent {
  availableTypes = SpaceShipType;
  initialShipCount = 1;
  initialShipType = SpaceShipType.Fighter;
  isProducing = false;

  constructor(private spaceShipService: SpaceShipService) { }

  onSubmit(formValues: SpaceShipFormValues) {
    this.isProducing = true;
    this.spaceShipService.produceShips(formValues)
        .subscribe({complete: () => this.isProducing = false});
  }

}
