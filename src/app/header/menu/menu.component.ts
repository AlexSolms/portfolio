import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit  {

  active:boolean = false;

  ngOnInit() {
    this.active = false; 
  }

  onBurgerClicked() {
    this.active = !this.active;
    console.log('active: ', this.active);
    document.getElementById('idMenuOpen')?.classList.toggle('openMenu');
    document.getElementById('idRoot')?.classList.toggle('noSroll');
     if(this.active)document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto'; 
 
  }
  
}
