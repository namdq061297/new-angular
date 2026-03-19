import {
  Component,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-ad-banner',
  standalone: true,
  imports: [AdDirective],
  template: `
    <ng-template adHost></ng-template>
  `
})
export class AdBannerComponent implements AfterViewInit, OnDestroy {
  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  ads: AdItem[] = [];
  currentIndex = 0;
  intervalId: any;

  constructor(private adService: AdService) {}

  ngAfterViewInit() {
    this.ads = this.adService.getAds();
    this.loadComponent();

    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.ads.length;
      this.loadComponent();
    }, 3000);
  }

  loadComponent() {
    const adItem = this.ads[this.currentIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(adItem.component);

    componentRef.setInput('data', adItem.data);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}