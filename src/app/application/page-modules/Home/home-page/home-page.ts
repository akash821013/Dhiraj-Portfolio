import { UpperCasePipe } from '@angular/common';
import { Component, AfterViewInit, OnInit, Inject, PLATFORM_ID, Injectable } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';




@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UpperCasePipe, MatIconModule, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements AfterViewInit {

  isDarkMode: boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

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

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';
    link.download = 'Dhiraj_Kumar_Resume.pdf';
    link.click();
  }

// toggleTheme(): void {
//   document.body.classList.toggle('dark-theme');
// }

toggleTheme(): void {
  console.log("Toggle clicked");
  document.body.classList.toggle('dark-theme');
}
  

}

// ---------------------- Reusable Service ------------------ //

@Injectable({ providedIn: 'root' })
export class NavigationService {
  constructor(private router: Router) { }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
