import { Component } from '@angular/core';
import { SwitchView } from '@angular/common/src/directives/ng_switch';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  role(cat){
      switch (cat) {
        case 'author':
          $('#author').html('<i class="fa fa-check"></i> I am Author');
          $('#author').css({'background-color':'#8977DE'});
          $('#client').html('I am Client');
          $('#client').css({'background-color':'#999'});
          break;
        case 'client':
          $('#client').html('<i class="fa fa-check"></i> I am Client');
          $('#client').css({'background-color':'#8977DE'});
          $('#author').html('I am Author');
          $('#author').css({'background-color':'#999'});
          break;
      
        default:
          break;
      }
  }
  
  user_id:string;
  showDarkBack = false;
  showLoginDiv = false;
  showLogin = false;
  showSignUp = false;
  showFpSent = false;
  showFpDiv = false;
  showAuthorSignUp = false;

  // Registration values
  regRole:string;
  regFirstName:string;
  regLastName:string;
  regEmail:string;
  regPassword:string;

  //Login values
  loginEmail:string;
  loginPassword:string;

  public user:object;
  public uName:string;

  all:string;
  rc:any;
  or:any;
  vr:any;
  lp:any;


  showBackLogin(bool){
    this.showDarkBack = bool;
    this.showLoginDiv = bool;
    this.showSignUp = !bool;
    this.showFpSent = !bool;
    this.showFpDiv = !bool;
    this.showLogin = bool;
  }
  showBackSignUp(bool){
    this.showDarkBack = bool;
    this.showLoginDiv = bool;
    this.showLogin = !bool;
    this.showFpSent = !bool;
    this.showFpDiv = !bool;
    this.showSignUp = bool;
  }
  showFp(bool){
    this.showDarkBack = bool;
    this.showLoginDiv = bool;
    this.showLogin = !bool;
    this.showFpSent = !bool;
    this.showFpDiv = bool;
    this.showSignUp = !bool;
  }
  showSentfp(bool){
    this.showDarkBack = bool;
    this.showLoginDiv = bool;
    this.showLogin = !bool;
    this.showFpSent = bool;
    this.showFpDiv = !bool;
    this.showSignUp = !bool;
  }
  closeShowBack(bool){
    this.showDarkBack = !bool;
    this.showLoginDiv = !bool;
    this.showLogin = !bool;
    this.showSignUp = !bool;
    this.showFpSent = !bool;
    this.showFpDiv = !bool;
    this.showAuthorSignUp = !bool;
  }
}
