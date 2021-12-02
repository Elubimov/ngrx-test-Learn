import {Component} from '@angular/core';

type counterMode = 'increase' | 'decrease' | 'clear';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0;
  updateAt?: number;

  get cannotDecrease(): boolean {
    return this.counter <= 0;
  }

  counterSum(value: counterMode): void {
    this.updateAt = Date.now();
    switch (value) {
      case 'increase':
        this.counter++;
        break;
      case 'decrease':
        this.counter--;
        break;
      case 'clear':
        this.counter = 0;
        break;
    }

  }
}
