import { Component,inject,  ElementRef, ViewChild, HostListener } from '@angular/core';
import { GlobalvarService } from '../../../globalvar.service';
import AOS from 'aos';

@Component({
  selector: 'app-el-pollo-loco',
  standalone: true,
  imports: [],
  templateUrl: './el-pollo-loco.component.html',
  styleUrl: './el-pollo-loco.component.scss'
})
export class ElPolloLocoComponent {
  data = inject(GlobalvarService);

  @ViewChild('elpollo') divFooter!: ElementRef;

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRectFooter = this.divFooter.nativeElement.getBoundingClientRect();

    if (boundingRectFooter.top >= windowHeight) {
      AOS.init();
    } 

  }

}
