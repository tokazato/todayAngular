import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLogin = true;
  errorText: string;
  constructor(
    private authServ: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.isLogin = !this.isLogin;
  }

  onSub(form: NgForm) {
    if(!form.valid) {return}

    const email = form.value.email;
    const pass = form.value.password;

    if(this.isLogin) {
      this.authServ.signIn(email, pass).subscribe(respoSucc => {
        console.log(respoSucc)
        this.router.navigate(['/contact'])
      },
      errorRes => {
        console.log(errorRes)
        if(errorRes) {
          this.errorText = errorRes; 
        }
      }
      )
    } else {
      this.authServ.singUp(email, pass).subscribe(succ => {
        console.log(succ)
      },
      errorRes => {
        console.log(errorRes)
        if(errorRes) {
          this.errorText = errorRes; 
        }
      })
    }


  }

}
