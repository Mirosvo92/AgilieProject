import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginService {

  dataUser = new BehaviorSubject<boolean>(false);

  constructor() { }

  getData(data) {
    // console.log(data);
    this.dataUser.next(data);
  }

}
