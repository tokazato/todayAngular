import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss']
})
export class HeaderInfoComponent implements OnInit {
  isauthtenticated = false;
  languages = [
    {
      lang: 'EN', status: true, clickLang: 'en',
    },
    {
      lang: 'GE', status: false, clickLang: 'ka',
    },
    {
      lang: 'RU', status: false, clickLang: 'ru',
    },
  ];

  constructor( 
    private el: ElementRef,
    private authServ: AuthService, 
    private translate: TranslateService) 
    { translate.setDefaultLang('en'); }

  ngOnInit() {
    this.authServ.user.subscribe(para => {
      this.isauthtenticated = !!para
    })
    if(localStorage.getItem('userInfo')){
      this.isauthtenticated = true
    } else {
      this.isauthtenticated = false
    }
  }

  getActive( lang, clicklang ) {
    this.translate.use(clicklang);
    this.languages.forEach(element => {
      element.status = false;
    })
    lang.status = true;
  }

  authentic() {
    if(this.isauthtenticated) {
      this.authServ.logOut()
      this.isauthtenticated = false;
    }
  }

  

 

  

}
