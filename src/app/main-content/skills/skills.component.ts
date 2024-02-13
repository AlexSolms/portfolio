import { Component, inject } from '@angular/core';
import { GlobalvarService } from '../../globalvar.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  data = inject(GlobalvarService);
}
