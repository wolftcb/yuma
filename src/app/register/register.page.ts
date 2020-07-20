import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(  private navCtrl: NavController,public authService: AuthenticationService,) { }

  ngOnInit() {
  }

  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)      
    .then((res) => {
      this.navCtrl.navigateForward('/tabs');
      // Do something here
    }).catch((error) => {
      window.alert(error.message)
    })
}
}
