import { Component,inject,  ElementRef, ViewChild, HostListener } from '@angular/core';
import { GlobalvarService } from '../../../globalvar.service';
import AOS from 'aos';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {
  data = inject(GlobalvarService);

  @ViewChild('Pokedex') divFooter!: ElementRef;

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRectFooter = this.divFooter.nativeElement.getBoundingClientRect();

    if (boundingRectFooter.top >= windowHeight) {
      AOS.init();
    } 

  }


}
