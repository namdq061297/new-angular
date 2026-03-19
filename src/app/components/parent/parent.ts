import { Component, ContentChild, ViewChild, type ElementRef, type OnInit } from '@angular/core';
import { Child } from "../child/child";
import { CounterService } from '../count.service';
import type { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [Child, AsyncPipe],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent implements OnInit {
  @ViewChild('wrapper') wrapper: ElementRef | undefined;
  @ContentChild('contentWrapper') content: ElementRef | undefined;

  countRx = 0;
  count$!: Observable<number>;
  age = 30;

  constructor(private counterService: CounterService) {
    this.count$ = this.counterService.count$;
  }

  showString(value: string) {
    console.log('Received string from child:', value);}
  
  generateRandom(num: number) {
    return Math.floor(Math.random() * num);
  }

  ngOnInit() {
    this.counterService.count$.subscribe(value => {
      this.countRx = value;
    });
  }

  count = 0;
  handleIncrease() {
    this.count++;
  }
  handleDecrease() {
    console.log('count', this.count);

    if (this.count > 0) {
      this.count--;
    }
  }
  userName = 'namdq';


  updateUser() {
    this.userName = 'angular';
  }
}
