import { Component, inject } from '@angular/core';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  data = inject(GlobalvarService);
}
