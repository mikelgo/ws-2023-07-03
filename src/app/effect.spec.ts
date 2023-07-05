import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {createActionGroup, emptyProps} from "@ngrx/store";
import * as events from "events";
import {map} from "rxjs/operators";
import {ReplaySubject} from "rxjs";
import {TestBed} from "@angular/core/testing";
import {provideMockActions} from "@ngrx/effects/testing";
import {subscribeSpyTo} from "@hirez_io/observer-spy";

export const Actions = createActionGroup({
  source: 'User',
  events: {
    'add': emptyProps(),
    'add success': emptyProps()
  }
  }

)

@Injectable()
export class MyEffects{
  createUser$ = createEffect(() => this.actions$.pipe(
    ofType(Actions.add),
    map(() => Actions.addSuccess())
  ) )

  constructor(private actions$: Actions) {
  }
}

describe('My Effects', () => {
  let effects: MyEffects;
  const actions: ReplaySubject<any> = new ReplaySubject(1);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MyEffects,
        provideMockActions(() => actions),
      ],
    });

    effects = TestBed.inject(MyEffects);
  });

  it('should work', () => {
    const result = subscribeSpyTo(effects.createUser$);
    actions.next(Actions.add())

    expect(result.getLastValue()).toEqual(Actions.addSuccess())

  });
});
