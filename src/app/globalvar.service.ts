import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalvarService {

  constructor() { }

  test:string = "hallo";
  translate:boolean=false;
  footerInView:boolean=false;
  imgPath:string= 'assets/img/icons/united-28519.svg';
  
  fnTranslate(){
    if(!this.translate){
      this.imgPath = 'assets/img/icons/germany-31017.svg';
      this.translate = true;
    }else{
      this.imgPath = 'assets/img/icons/united-28519.svg';
      this.translate = false;
    }
  }

}
