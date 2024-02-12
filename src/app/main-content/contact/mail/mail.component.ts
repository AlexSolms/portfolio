import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
// import { isNullOrUndef } from 'chart.js/dist/helpers/helpers.core';
import { CommonModule } from '@angular/common';

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

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  checkboxState = false;

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
          //  this.resetStyle();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
     // this.resetStyle();
      ngForm.resetForm();
    }
  }



 /*  test(filled: boolean, field: string) {

    if (field !== null) {
      if (filled) {
        document.getElementById("id" + field)!.classList.add("valid");
        document.getElementById("idFilled" + field)!.style.display = "block"
        document.getElementById("idEmpty" + field)!.style.display = "none"; 

      }
      else {
        document.getElementById("id" + field)!.classList.remove("valid");
       document.getElementById("idFilled" + field)!.style.display = "none";
        document.getElementById("idEmpty" + field)!.style.display = "block"; 

      }
    }

  }*/

 /*  resetStyle(){
    
    let inputField = ['Name', 'Email', 'Message'];
    inputField.forEach(e => {
      document.getElementById("id" + e)!.classList.remove("valid");
      document.getElementById("idFilled" + e)!.style.display = "none";
    });
  } */

}


