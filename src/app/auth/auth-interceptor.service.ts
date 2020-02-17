import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authServ: AuthService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.authServ.user.pipe(
            take(1),
            exhaustMap(user => {
                if(!user) {
                    return next.handle(req)
                }
                const newReq = req.clone({
                    params: new HttpParams().set('auth', user.token)
                })
                return next.handle(newReq);
            })
        )
    }
}