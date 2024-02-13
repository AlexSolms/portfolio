import { Component, inject } from '@angular/core';
import { GlobalvarService } from '../../globalvar.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  data = inject(GlobalvarService);
}
