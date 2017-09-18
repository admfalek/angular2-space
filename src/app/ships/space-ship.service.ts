import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SpaceShip } from './space-ship';
import { SpaceShipFormValues } from './space-ship-form-values';
import { SpaceShipType } from './space-ship-type';
import { FighterShip } from './fighter-ship';
import { BomberShip } from './bomber-ship';

@Injectable()
export class SpaceShipService {
  static shipProductionTime = 2000;
  hangarShips$ = new BehaviorSubject<SpaceShip[]>([]);

  constructor() {}

  produceShips(formValues: SpaceShipFormValues): Observable<SpaceShip> {
    return Observable
      .range(0, formValues.shipCount)
      .delay(SpaceShipService.shipProductionTime * formValues.shipCount)
      .map(() => formValues.shipType === SpaceShipType.Fighter ? new FighterShip() : new BomberShip())
      .do((spaceShip: SpaceShip) => this.hangarShips$.next([...this.hangarShips$.getValue(), spaceShip]));
  }

  removeShip(shipIndex: number) {
    const ships = [...this.hangarShips$.getValue()];
    ships.splice(shipIndex, 1);
    this.hangarShips$.next(ships);
  }
}
