import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../Home/home-page/home-page';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private nav: NavigationService) {}

  async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = await import('aos');
      AOS.default.init({
        duration: 1000,
        once: false,
        mirror: true,
        offset: 120,
      });

        setTimeout(() => {
        AOS.default.refresh();
      }, 500);
    }
  }
  goBack(): void {
   this.nav.goBack();
}
}


