import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// components
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ChatComponent} from './chat/chat.component';
import {PageLinkComponent} from './header/page-link/page-link.component';
import {SearchComponent} from './header/search/search.component';
import {UserLinkComponent} from './header/user-link/user-link.component';
import {LanguageComponent} from './header/language/language.component';
import {PagesComponent} from './pages/pages.component';
import {HomeComponent} from './pages/home/home.component';
import {CollectionComponent} from './pages/collection/collection.component';
import {UploadComponent} from './pages/upload/upload.component';
// routing
import {AppRoutingModule} from './app-routing.module';
// directives
import {ShowDirective} from './shared/directives/show.directive';
import {HideDirective} from './shared/directives/hide.directive';
// services
import {SignInComponent} from './header/user-link/sign-in/sign-in.component';
import {LoginService} from './shared/services/login.servise';
import {Facebook} from './shared/SDK/facebook';

// function for translate
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChatComponent,
    PageLinkComponent,
    SearchComponent,
    UserLinkComponent,
    LanguageComponent,
    PagesComponent,
    HomeComponent,
    CollectionComponent,
    UploadComponent,
    ShowDirective,
    HideDirective,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
