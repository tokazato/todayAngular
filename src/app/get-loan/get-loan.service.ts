import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { take, exhaustMap, tap, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GetLoanService {
    newForm = new BehaviorSubject(null)
    
    constructor (
        private http: HttpClient,
        private authServ: AuthService) {}

    sendForm(userForm: FormGroup) {
        return this.authServ.user.pipe(
            take(1),
            exhaustMap(gettok => {
                return this.http.put('https://cfi-group-angular.firebaseio.com/auto-loan.json', userForm,
                {
                    params: new HttpParams().set('auth', gettok.token)
                }
                )
            })
        )
    }

    fetch() {
       return this.http.get('https://cfi-group-angular.firebaseio.com/auto-loan.json')
    //    .pipe(
        //    map(takeFormField => {
        //        console.log(takeFormField)
        //        this.newForm.next(takeFormField)
        //    })
    //    )
    }

    private testFun(para) {
        const name = para.name
        const surname = para.surname
        const id = para.id
        const tel = para.tel
    }
}