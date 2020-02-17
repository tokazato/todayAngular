// import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
// import { take, exhaustMap } from 'rxjs/operators';
// import { Injectable } from '@angular/core';
// import { GetLoanService } from '../get-loan.service';

// @Injectable()
// export class AuthInterceptorService implements HttpInterceptor {
//     constructor(private getloanServ: GetLoanService) {}
//     intercept(req: HttpRequest<any>, next: HttpHandler) {
//         return this.getloanServ.sendForm.pipe(
//             take(1),
//             exhaustMap(user => {
//                 if(!user) {
//                     return next.handle(req)
//                 }
//                 const newReq = req.clone({
//                     params: new HttpParams().set('auth', user.token)
//                 })
//                 return next.handle(newReq);
//             })
//         )
//     }
// }