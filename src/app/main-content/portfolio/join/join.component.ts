import { Component,inject,  ElementRef, ViewChild, HostListener } from '@angular/core';
import { GlobalvarService } from '../../../globalvar.service';
import AOS from 'aos';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {
  data = inject(GlobalvarService);

  @ViewChild('join') divFooter!: ElementRef;

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRectFooter = this.divFooter.nativeElement.getBoundingClientRect();

    if (boundingRectFooter.top >= windowHeight) {
      AOS.init();
    } 

  }

}
