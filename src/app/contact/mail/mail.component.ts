import { Component} from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mail.component.html',
  styleUrl: './mail.component.scss'
})
export class MailComponent{
  form = {
    fullname:'',
    email:'',
    message:''
  }

}
