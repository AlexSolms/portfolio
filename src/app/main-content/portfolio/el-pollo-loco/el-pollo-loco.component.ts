import { Component, inject } from '@angular/core';
import { GlobalvarService } from '../../../globalvar.service';

@Component({
  selector: 'app-el-pollo-loco',
  standalone: true,
  imports: [],
  templateUrl: './el-pollo-loco.component.html',
  styleUrl: './el-pollo-loco.component.scss'
})
export class ElPolloLocoComponent {
  data = inject(GlobalvarService);
}
