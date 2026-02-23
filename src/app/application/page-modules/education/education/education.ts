import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationService } from '../../Home/home-page/home-page';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private nav: NavigationService) {}

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






