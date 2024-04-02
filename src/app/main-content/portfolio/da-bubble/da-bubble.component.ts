import { Component,inject,  ElementRef, ViewChild, HostListener } from '@angular/core';
import { GlobalvarService } from '../../../globalvar.service';
import AOS from 'aos';

@Component({
  selector: 'app-da-bubble',
  standalone: true,
  imports: [],
  templateUrl: './da-bubble.component.html',
  styleUrl: './da-bubble.component.scss'
})
export class DaBubbleComponent {
  data = inject(GlobalvarService);

  disable:boolean = true;
  showMessage: boolean = false;

  @ViewChild('daBubble') divFooter!: ElementRef;

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRectFooter = this.divFooter.nativeElement.getBoundingClientRect();

    if (boundingRectFooter.top >= windowHeight) {
      AOS.init();
    } 

  }

  showPopup(event: MouseEvent) {
    if (this.disable) {
      event.preventDefault();
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 2000); // Popup wird nach 2 Sekunden wieder ausgeblendet
    }
  }

}
