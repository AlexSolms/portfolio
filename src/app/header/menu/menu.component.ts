import { CommonModule } from '@angular/common';
import { Component, OnInit, inject} from '@angular/core';
import { GlobalvarService } from '../../globalvar.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit  {
  
  data = inject(GlobalvarService);
  active:boolean = false;

  ngOnInit() {
    this.active = false; 
  }

  onBurgerClicked() {
    this.active = !this.active;
    if(this.active)document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto'; 
 
  }
 
}
