import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero-profile-ad',
  standalone: true,
  template: `
    <div [style.background]="data().color" style="padding:20px; color:white">
      <h2>{{ data().title }}</h2>
      <p>{{ data().content }}</p>
    </div>
  `
})
export class HeroProfileAdComponent {
  data = input<any>();
}