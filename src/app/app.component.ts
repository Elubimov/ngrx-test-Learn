import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {decrease, increase, clear, countSelector} from "./reducers/counter";
import {count, map} from "rxjs/internal/operators";

type counterMode = 'increase' | 'decrease' | 'clear';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  updateAt?: number;

  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0));


  constructor(private store: Store) {
  }

  counterSum(value: counterMode): void {
    this.updateAt = Date.now();
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
