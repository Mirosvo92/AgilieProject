import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../shared/services/login.servise';
import {FacebookLogout} from '../../shared/SDK/facebook';

@Component({
  selector: 'app-user-link',
  templateUrl: './user-link.component.html',
  styleUrls: ['./user-link.component.scss']
})
export class UserLinkComponent implements OnInit {
  dataUser: any;
  isUser = false;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
   this.loginService.dataUser.subscribe( (data) => {
     this.dataUser = data;
     if (data['first_name']) {
       this.isUser = true;
     }
   });
  }

  onSignOut() {
    const facebookLogout = new FacebookLogout();
    facebookLogout.logout();
    this.isUser = false;
  }

}
