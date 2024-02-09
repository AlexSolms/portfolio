import { Component } from '@angular/core';
import { MailComponent } from './mail/mail.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MailComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}

