import {Component, Input, OnInit} from '@angular/core';
import {Facebook} from '../../../shared/SDK/facebook';
import {LoginService} from '../../../shared/services/login.servise';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  @Input() signButton;
  facebook: Facebook;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.facebook = new Facebook();
    this.loginService.getData(this.facebook.dataUser);
    this.facebook.dataUser.subscribe( (data) => {
      this.loginService.getData(data);
    });
  }

  loginFaceBook(e) {
    e.preventDefault();
    this.facebook.login();
    this.facebook.dataUser.subscribe( (data) => {
      this.loginService.getData(data);
    });
  }

}
