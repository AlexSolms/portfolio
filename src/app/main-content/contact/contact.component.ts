import { Component, inject } from '@angular/core';
import { MailComponent } from './mail/mail.component';
import { GlobalvarService } from '../../globalvar.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MailComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  data = inject(GlobalvarService);
}

