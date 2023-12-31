import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rxa-setup-container',
  template: `
    <h1>Setup</h1>
    <mat-form-field>
      <label>RefreshInterval</label>
      <input
        type="number"
        (input)="refreshIntervalInput$.next($event)"
        matInput
      />
    </mat-form-field>

    <rxa-setup-start
      [refreshInterval]="refreshInterval$ | async"
      (listExpandedChange)="listExpandedChange$.next($event)"
    >
    </rxa-setup-start>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupContainerComponent {
  refreshIntervalInput$ = new Subject<Event>();
  refreshInterval$: Observable<number> = this.refreshIntervalInput$.pipe(
    map((e: any) => e.target.value)
  );
  listExpandedChange$ = new Subject<boolean>();
}
