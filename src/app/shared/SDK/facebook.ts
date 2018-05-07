import {BehaviorSubject} from 'rxjs/BehaviorSubject';


declare const FB: any;

export class Facebook {

  response = new BehaviorSubject<boolean>(false);
  dataUser = new BehaviorSubject<boolean>(false);
  userId: number;

  constructor() {
    this.init();
  }

  login() {
    FB.login(response => {
      if (response.status === 'connected') {
        this.response.next(response);
        this.response.subscribe( (data) => {
          this.userId = data['authResponse']['userID'];
          this.me(this.userId);
        });
      }
    }, {scope: 'public_profile,email'} );
  }

  me(userId) {
    FB.api('/' + userId + '?fields=id,name,first_name,email,gender,picture.width(150).height(150)', (result) => {
      this.dataUser.next(result);
    });
  }

  init() {
    let js;
    const id = 'facebook-jssdk';
    const ref = document.getElementsByTagName('script')[0];
    if (document.getElementById(id)) {
      return;
    }
    js = document.createElement('script');
    js.id = id;
    js.async = true;
    js.src = '//connect.facebook.net/en_US/sdk.js';

    ref.parentNode.insertBefore(js, ref);

    js.onload = () => {
      this.initSDK();
    };
  }
  // initialization SDK
  initSDK() {
    FB.init({
      appId: '1745412955519319',
      autoLogAppEvents : true,
      xfbml: true,
      version: 'v3.0'
    });
    this.setCallback();
  }

  setCallback() {
    FB.getLoginStatus(response => {
      console.log(response);
      if (response.status === 'connected') {
        this.response.next(response);
        this.response.subscribe( (data) => {
          this.userId = data['authResponse']['userID'];
          this.me(this.userId);
        });
      }
    });
  }
}

export class FacebookLogout {
  constructor() {}
  logout() {
    FB.logout();
  }
}
