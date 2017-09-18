import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pilot } from './pilot';
import { PilotService } from './pilot.service';

export class PilotValidators {
  static pilotName(formControl: FormControl) {
    return !formControl.value || /^[A-Z]/.test(formControl.value) ? null : {pilotName: {valid: false}};
  }

  static pilotUniq(pilot: Pilot, pilotService: PilotService) {
    return (formControl: FormControl) => {
      return Observable.timer(500)
        .switchMap(() => pilotService.getPilotByLastName(formControl.value))
        .map((fetchedPilot) => (fetchedPilot && fetchedPilot.id !== pilot.id) ? {pilotUniq: {valid: false}} : null);
    }
  }
}
