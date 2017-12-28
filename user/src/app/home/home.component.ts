import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  radio(text){
    switch (text) {
      case "1":
      
      $('#text1').css({'display':'block'});
      $('#text2').css({'display':'none'});
      $('#text3').css({'display':'none'});
      $('#text4').css({'display':'none'});
      break;
      case "2":
      
      $('#text2').css({'display':'block'});
      $('#text1').css({'display':'none'});
      $('#text3').css({'display':'none'});
      $('#text4').css({'display':'none'});      
      break;
      case "3":
      
      $('#text3').css({'display':'block'});
      $('#text2').css({'display':'none'});
      $('#text1').css({'display':'none'});
      $('#text4').css({'display':'none'});      
      break;
      case "4":
     
      $('#text4').css({'display':'block'});
      $('#text2').css({'display':'none'});
      $('#text1').css({'display':'none'});
      $('#text3').css({'display':'none'});      
      break;
  
    default:

      break;
  }  
  }

}
