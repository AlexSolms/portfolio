import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit  {
 /*  @Input() init: boolean | undefined;
  @Output() opened = new EventEmitter<any>();
 */
  active:boolean = false;

  ngOnInit() {
    this.active =  false; //this.init ||
  }

  onBurgerClicked() {
    this.active = !this.active;
    console.log('active: ', this.active)
    //this.opened.emit();
    document.getElementById('idMenuOpen')?.classList.toggle('openMenu');
    document.getElementById('idRoot')?.classList.toggle('noSroll');
     if(this.active)document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto'; 
 
  }
  
}
