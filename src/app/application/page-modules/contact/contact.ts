import { Component,AfterViewInit,Inject, PLATFORM_ID } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { isPlatformBrowser } from '@angular/common';
import { NavigationService } from '../Home/home-page/home-page';

@Component({
  selector: 'app-contact',
  imports: [MatIconModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private nav: NavigationService) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS (Animate On Scroll) after view is initialized
      (window as any).AOS.init();
    }
  }

  goBack(): void {
    this.nav.goBack();
  }
}
