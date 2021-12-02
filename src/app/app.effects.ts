import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {changeUpdatedAt, clear, decrease, increase} from "./reducers/counter";
import {map} from "rxjs/internal/operators";

@Injectable()
export class AppEffects {

  updateAt$ = createEffect(() => this.actions$.pipe(
    ofType(increase, decrease, clear),
    map(() => changeUpdatedAt({updateAt: Date.now()}))
  ));

  constructor(private actions$: Actions) {
  }
}
