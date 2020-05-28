import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { MainComponent } from './main/main.component';
import { AboutAsComponent } from './about-as/about-as.component';
import { NewsComponent } from './news/news.component';
import { LoansComponent } from './loans/loans.component';
import { GetLoanComponent } from './get-loan/get-loan.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContactComponent } from './contact/contact.component';
import { AuthComponent } from './auth/auth.component';
import { BusinessLoanComponent } from './get-loan/business-loan/business-loan.component';
import { AutoLoanComponent } from './get-loan/auto-loan/auto-loan.component';
import { FastLoanComponent } from './get-loan/fast-loan/fast-loan.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes  = [
    // {path: '', redirectTo: '/main' , pathMatch: 'full'},
    {path: '', component: MainComponent},
    // {path: 'main', component: MainComponent},
    {path: 'aboutas', component: AboutAsComponent},
    {path: 'news', component: NewsComponent},
    {path: 'loans', component: LoansComponent},
    {path: 'getloan', component: GetLoanComponent},
    {path: 'calculator', component: CalculatorComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'business-loan', component: BusinessLoanComponent},
    {path: 'auto-loan', component: AutoLoanComponent},
    {path: 'fast-loan', component: FastLoanComponent},
    {path: 'page-not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/page-not-found' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}