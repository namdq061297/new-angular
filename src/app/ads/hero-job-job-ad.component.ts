import { Component, input } from "@angular/core";

@Component({
  selector: 'app-hero-job-ad',
  standalone: true,
  template: `
    <div [style.background]="data().color" style="padding:20px; color:white">
      <h3>🔥 {{ data().title }}</h3>
      <p>{{ data().content }}</p>
    </div>
  `
})
export class HeroJobAdComponent {
  data = input<any>();
}