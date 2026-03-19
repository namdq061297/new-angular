import { Injectable } from '@angular/core';
import { AdItem } from './ad-item';
import { HeroProfileAdComponent } from './hero-profile.component';
import { HeroJobAdComponent } from './hero-job-job-ad.component';

@Injectable({ providedIn: 'root' })
export class AdService {
  getAds(): AdItem[] {
    return [
      {
        component: HeroProfileAdComponent,
        data: {
          title: 'Profile Sale',
          content: 'Giảm giá profile',
          color: '#ff4d4f'
        }
      },
      {
        component: HeroJobAdComponent,
        data: {
          title: 'Job Hot',
          content: 'Tuyển dụng gấp',
          color: '#1890ff'
        }
      }
    ];
  }
}