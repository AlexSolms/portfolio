import { Component, OnInit, inject } from '@angular/core';
import { GlobalvarService } from '../../globalvar.service';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
@Component({
  selector: 'app-iam',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iam.component.html',
  styleUrl: './iam.component.scss'
})
export class IamComponent implements OnInit{
  data = inject(GlobalvarService);

  ngOnInit(){
   // AOS.init();
    AOS.init({disable: 'mobile'});//AOS - 2
    AOS.refresh();
  }
}
