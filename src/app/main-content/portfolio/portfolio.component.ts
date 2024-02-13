import { Component, inject } from '@angular/core';
import { JoinComponent } from './join/join.component';
import { ElPolloLocoComponent } from './el-pollo-loco/el-pollo-loco.component';
import { DaBubbleComponent } from './da-bubble//da-bubble.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { GlobalvarService } from '../../globalvar.service';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    JoinComponent,
    ElPolloLocoComponent,
    DaBubbleComponent,
    PokedexComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  data = inject(GlobalvarService);
}
