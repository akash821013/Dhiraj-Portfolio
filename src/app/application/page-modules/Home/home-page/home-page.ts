import { UpperCasePipe } from '@angular/common';
import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';




@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UpperCasePipe, MatIconModule,RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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
}
