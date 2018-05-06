import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  isEnglish = true;

  constructor(private translate: TranslateService) { }
  // method for change language
  switchLanguage(language: string) {
    this.translate.use(language);
    this.isEnglish = language === 'ru' ? false : true;
  }

  ngOnInit() {
  }

}
