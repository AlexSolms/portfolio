import { Component,inject } from '@angular/core';
import { GlobalvarService } from '../../../globalvar.service';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {
  data = inject(GlobalvarService);
}
