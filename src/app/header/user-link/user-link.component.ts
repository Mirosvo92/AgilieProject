import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../shared/services/login.servise';
import {Facebook, FB} from '../../shared/SDK/facebook';

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
    const test = new Facebook();
    test.logout();
    this.isUser = false;
  }

}
