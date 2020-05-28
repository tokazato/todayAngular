import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import Swiper from 'swiper';

@Injectable({providedIn: 'root'})
export class DataStorageService {

    sliderInService = new Subject();

    slides;

    constructor( private http: HttpClient ) {}

    returnmethod() {
        return this.slides;
    }

    // subjectReturn() {
    //     return this.sliderInService;
    // }

    // getSlides() {
    //    this.sliderInService.next(this.slides);
    // }

    // createSlider() {
    //     this.objecSlides = new Swiper ('.swiper-container', {
    //         navigation: {
    //           nextEl: '.swiper-button-next',
    //           prevEl: '.swiper-button-prev',
    //         },
    //       });
    // }

    // getSlider() {
    //     return this.objecSlides;
    // }


    fetchData() {
        return this.http.get(`https://cfi-group-angular.firebaseio.com/home/main-slider.json`).pipe(
            tap(slide => {
                this.slides = slide;
                this.sliderInService.next(this.slides.slice());
                // this.getSlides();
                // this.sliderInService.next(slide)
            })
        )
    }

    
}