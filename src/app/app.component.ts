import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './share/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (  
                private authServ: AuthService,
                private dataStorage: DataStorageService,
              ) {}

  ngOnInit() {
    this.authServ.autoLogin()
    this.authServ.autoLogout()
    if(localStorage.getItem('userInfo')) {
      this.dataStorage.fetchData().subscribe()
    }
  }

  

}
