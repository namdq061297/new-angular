import {
  Component,
  computed,
  ContentChild,
  EventEmitter,
  input,
  Input,
  Output,
  ViewChild,
  type AfterContentChecked,
  type AfterContentInit,
  type AfterViewChecked,
  type AfterViewInit,
  type DoCheck,
  type ElementRef,
  type OnChanges,
  type OnDestroy,
  type OnInit,
  type SimpleChanges,
} from '@angular/core';
import { CounterService } from '../count.service';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child
  implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() userName = '';
  @ViewChild('wrapper') wrapper: ElementRef | undefined;
  @ContentChild('contentWrapper') content: ElementRef | undefined;
  @Output() increase = new EventEmitter<void>();
  @Output() decrease = new EventEmitter<void>();
  @Output() passString = new EventEmitter<string>();

  age = input.required<number>(); // bắt buộc
  doubleAge = computed(() => this.age() * 2);

  randomNumber = input<(max: number) => number>();

  onRandomNumber() {
    const fn = this.randomNumber();
    if (fn) {
      console.log(fn(10)); // Example usage, passing a max value
    }
  }

  constructor(private counterService: CounterService) { }

  increaseRx() {
    this.counterService.increase();
  }
  decreaseRx() {
    this.counterService.decrease();
  }

  onClick() {
    this.increase.emit();
  }

  onClickDecrease() {
    this.decrease.emit();
  }

  passStringToParent(val: string) {
    this.passString.emit(val);
  }

  ngOnInit(): void {
    console.log('Child component initialized with userName:', this.userName);
  }

  ngAfterContentInit(): void {
    console.log('Child component content initialized wrapper', this.wrapper);
    console.log('Child component content initialized content', this.content);
  }

  ngAfterContentChecked(): void {
    console.log('Child component content checked');
  }

  ngAfterViewInit(): void {
    console.log('Child component view initialized wrapper', this.wrapper);
  }

  ngAfterViewChecked(): void {
    console.log('Child component view checked');
  }

  ngDoCheck(): void {
    console.log('Child component checked for changes');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userName']) {
      console.log('userName changed to:', this.userName);
    }
    if (changes['age']) {
      console.log('age changed to:', this.age());
      console.log('double age:', this.doubleAge());
    }
  }
  ngOnDestroy(): void {
    console.log('Child component destroyed');
  }
}
