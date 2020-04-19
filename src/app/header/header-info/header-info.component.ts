import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss']
})
export class HeaderInfoComponent implements OnInit {
  constructor(private authServ: AuthService) { }
  isauthtenticated = false;

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

  

}
