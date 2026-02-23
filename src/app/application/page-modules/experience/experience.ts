import { Component, AfterViewInit,Inject, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS (Animate On Scroll) after view is initialized
      (window as any).AOS.init();
    }
  }

}
