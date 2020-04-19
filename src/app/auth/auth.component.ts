import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute) { }

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
        this.router.navigate(['../'], {relativeTo: this.route})
        this.authServ.autoLogout()
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
        this.router.navigate(['../'], {relativeTo: this.route})
      },
      errorRes => {
        console.log(errorRes)
        if(errorRes) {
          this.errorText = errorRes; 
        }
      })
      this.isLogin = false;
    }


  }

}
