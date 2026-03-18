import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CounterService {
  private countSource = new BehaviorSubject<number>(0);

  // observable cho component subscribe
  count$ = this.countSource.asObservable();

  increase() {
    const current = this.countSource.value;
    this.countSource.next(current + 1);
  }

  decrease() {
    const current = this.countSource.value;
    if (current > 0) {
      this.countSource.next(current - 1);
    }
  }
}