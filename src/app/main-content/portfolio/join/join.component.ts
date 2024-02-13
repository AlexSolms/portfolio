import { Component, inject } from '@angular/core';
import { GlobalvarService } from '../../../globalvar.service';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {
  data = inject(GlobalvarService);
}
