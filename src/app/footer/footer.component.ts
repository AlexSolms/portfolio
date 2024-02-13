import { Component, ElementRef, ViewChild, HostListener, inject } from '@angular/core';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  data = inject(GlobalvarService);

  @ViewChild('footerbar') divFooter!: ElementRef;
  
  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRectFooter = this.divFooter.nativeElement.getBoundingClientRect();

    if (boundingRectFooter.top >= windowHeight) {
      this.data.footerInView = false;
    } else {
      this.data.footerInView = true;
    }

  }








}
