import { Component, HostListener, inject } from '@angular/core';

import { IamComponent } from './iam/iam.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { GlobalvarService } from '../globalvar.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    IamComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    CommonModule
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})


export class MainContentComponent {
  showUpButton: boolean = false;
  data = inject(GlobalvarService);

  

  @HostListener('window:scroll', [])
  onWindowScroll() {
       if (window.scrollY > 200) {
      this.showUpButton = true;
    } else {
      this.showUpButton = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
