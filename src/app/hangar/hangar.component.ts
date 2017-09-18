import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceShip } from '../ships/space-ship';
import { FighterShip } from '../ships/fighter-ship';
import { BomberShip } from '../ships/bomber-ship';
import { Pilot } from '../pilots/pilot';
import { PilotRoomComponent } from '../pilots/pilot-room/pilot-room.component';
import { SpaceShipService } from '../ships/space-ship.service';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;
  selectedPilot: Pilot = null;
  spaceShips$: Observable<SpaceShip[]>;

  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit() {
    this.spaceShips$ = this.spaceShipService.hangarShips$;

    

  }

  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave(this.selectedPilot);
    this.pilotRoom.selectPilot(null);
  }

  deassignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }
}
