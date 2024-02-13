import { Component,inject } from '@angular/core';
import { GlobalvarService } from '../../../globalvar.service';

@Component({
  selector: 'app-da-bubble',
  standalone: true,
  imports: [],
  templateUrl: './da-bubble.component.html',
  styleUrl: './da-bubble.component.scss'
})
export class DaBubbleComponent {
  data = inject(GlobalvarService);
}
