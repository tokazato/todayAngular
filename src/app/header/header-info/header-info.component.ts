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

  authentic() {
    if(this.isauthtenticated) {
      this.authServ.logOut()
      this.isauthtenticated = false;
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

 

  

}
