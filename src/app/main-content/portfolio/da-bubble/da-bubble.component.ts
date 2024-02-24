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

  @ViewChild('daBubble') divFooter!: ElementRef;

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRectFooter = this.divFooter.nativeElement.getBoundingClientRect();

    if (boundingRectFooter.top >= windowHeight) {
      AOS.init();
    } 

  }

}
