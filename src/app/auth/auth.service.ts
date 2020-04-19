import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import { Router } from '@angular/router';

interface authResponseData {
    idToken: string;	
    email: string;
    refreshToken: string;	
    expiresIn: string;
    localId: string;
    registered?: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(
        private http: HttpClient,
        private router: Router) {}
    user = new BehaviorSubject<User>(null)

    singUp(email: string, password: string) {
        return this.http.post<authResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDqlQiH_1_ssDBmEkV-z40dCy9J9S4nXBQ', 
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
        ).pipe(
            catchError(this.checkError),
            tap(par => {
                this.userStyle(par.email, par.localId, par.idToken, +par.expiresIn)
            })
        )
    }

    signIn(email: string, password: string) {
        return this.http.post<authResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDqlQiH_1_ssDBmEkV-z40dCy9J9S4nXBQ',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
        ).pipe(
            catchError(this.checkError),
            tap(par => {
                this.userStyle(par.email, par.localId, par.idToken, +par.expiresIn)
            })
        )
    }

    autoLogin() {
        const userData: {
            email: string,
            id: string,
            _token: string,
            expire: string,
        } = JSON.parse(localStorage.getItem('userInfo'));
        if(!userData) {
            return
        }
        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData.expire))
        if(loadedUser.token) {
            this.user.next(loadedUser)
        }
    }

    autoLogout() {
        setTimeout(() => {
          localStorage.removeItem('userInfo')
          this.user.next(null)
        }, 1000 * 60 * 60 * 1);
    }

    logOut() {
        this.user.next(null)
        localStorage.removeItem('userInfo')
    }

    private userStyle(
        email: string,
        id: string,
        token: string,
        expire: number
    ) {
        const exp = new Date(new Date().getTime() + +expire * 100)
        const user2 = new User(email, id, token, exp)
        this.user.next(user2)
        localStorage.setItem('userInfo', JSON.stringify(user2))
    }

    private checkError(errorRes: HttpErrorResponse) {
        let unkown = 'Unkown Error'
        if(!errorRes.error || !errorRes.error.error) {
            return throwError(unkown);
        }
        switch(errorRes.error.error.message) {
            case 'EMAIL_EXISTS': 
               unkown = 'email is already' ;
               break;
            case 'EMAIL_NOT_FOUND': 
               unkown = 'email not found' ;
               break;
            case 'OPERATION_NOT_ALLOWED' : 
                unkown = 'password false'
                break;
            case 'INVALID_PASSWORD' : 
                unkown = 'password is incorect'
                break;
        }
        return throwError(unkown);
    }
    
}

