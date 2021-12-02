import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {decrease, increase, clear, countSelector, updateAtSelector} from "./reducers/counter";
import {count, map} from "rxjs/internal/operators";

type counterMode = 'increase' | 'decrease' | 'clear';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0));
  updateAt$ = this.store.select(updateAtSelector);


  constructor(private store: Store) {
  }

  counterSum(value: counterMode): void {
    switch (value) {
      case 'increase':
        this.store.dispatch(increase());
        break;
      case 'decrease':
        this.store.dispatch(decrease());
        break;
      case 'clear':
        this.store.dispatch(clear());
        break;
    }

  }
}
