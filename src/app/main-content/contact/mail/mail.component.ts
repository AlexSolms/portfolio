import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GlobalvarService } from '../../../globalvar.service';

@Component({
  selector: 'app-mail',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './mail.component.html',
  styleUrl: './mail.component.scss'
})
export class MailComponent {
  data = inject(GlobalvarService);
  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  checkboxState = false;
  mailSend = false;
  mailTest = false;

  post = {
    endPoint: 'https://alexander-solms.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            //this.mailSend = true;
            this.popUpMailSendShow();
           } //console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  popUpMailSendShow() {
    this.mailSend = true;
    document.body.style.overflow = 'hidden';
  
 
  }
  popUpMailSendhide() {
    this.mailSend = false;
    
   document.body.style.overflow = 'auto'; 
 
  }

}


