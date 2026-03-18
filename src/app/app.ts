import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './test/test';
import { Parent } from './components/parent/parent';
import { Child } from './components/child/child';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Parent],
})
export class App {
  protected readonly title = signal('new-angular');
}
