import { Component, inject } from '@angular/core';
import { GlobalvarService } from '../../globalvar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iam',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iam.component.html',
  styleUrl: './iam.component.scss'
})
export class IamComponent {
  data = inject(GlobalvarService);
}
