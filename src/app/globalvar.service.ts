import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalvarService {

  constructor() { }

 
  translate:boolean=true;
  footerInView:boolean=false;

  
  fnTranslate(){
    if(this.translate){
      this.translate = false;
    }else{
      this.translate = true;
    }
  }

}
