import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderInfoComponent } from './header/header-info/header-info.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { MainComponent } from './main/main.component';
import { AboutAsComponent } from './about-as/about-as.component';
import { NewsComponent } from './news/news.component';
import { LoansComponent } from './loans/loans.component';
import { GetLoanComponent } from './get-loan/get-loan.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SliderComponent } from './main/slider/slider.component';
import { MainNewsComponent } from './main/main-news/main-news.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { BusinessLoanComponent } from './get-loan/business-loan/business-loan.component';
import { AutoLoanComponent } from './get-loan/auto-loan/auto-loan.component';
import { FastLoanComponent } from './get-loan/fast-loan/fast-loan.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderInfoComponent,
    HeaderNavComponent,
    MainComponent,
    AboutAsComponent,
    NewsComponent,
    LoansComponent,
    GetLoanComponent,
    CalculatorComponent,
    ContactComponent,
    FooterComponent,
    SliderComponent,
    MainNewsComponent,
    AuthComponent,
    BusinessLoanComponent,
    AutoLoanComponent,
    FastLoanComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
