import { Component, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { DataStorageService } from 'src/app/share/data-storage.service';

import Swiper from 'swiper';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit, AfterViewInit {
  slides;

  constructor( private dataStorageService: DataStorageService ) { }

  ngOnInit() {

    // this.slides = this.dataStorageService.returnmethod();
    
    // this.dataStorageService.sliderInService.subscribe(data => {
    //   this.slides = data;

    //   setTimeout(() => {
    //     const mySwiper = new Swiper ('.swiper-container', {
    //       navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //       },
    //     });
    //   }, 10);

    // })

    // if(this.slides) {
    //   setTimeout(() => {
    //     const mySwiper = new Swiper ('.swiper-container', {
    //       navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //       },
    //     });
    //   }, 10);
    // }
    
    
  }

  ngAfterViewInit() {

   
    if(!this.slides) {
      this.dataStorageService.getSlides();
      console.log('if-shi var')
    }

    this.dataStorageService.sliderInService.subscribe(paramSlides => {
      console.log(paramSlides)
      this.slides = paramSlides;
      console.log(this.slides)
      
    });

    

    console.log('asd ' + this.slides)

    

    

    

    // this.dataStorageService.getSlides();

    // this.deleteSubsciption = this.dataStorageService.subjectReturn().subscribe( param => {
    //   console.log('rame');
    //   this.slides = param;
      
      
    //   if( ! this.dataStorageService.getSlider() ) {

    //     setTimeout(() => {
    //       this.dataStorageService.createSlider();
    //       this.objectSlides = this.dataStorageService.getSlider();
    //       // this.objectSlides = new Swiper ('.swiper-container', {
    //       //   navigation: {
    //       //     nextEl: '.swiper-button-next',
    //       //     prevEl: '.swiper-button-prev',
    //       //   },
    //       // });
    //     }, 1000);

    //   } else {
    //     this.objectSlides = this.dataStorageService.getSlider();
    //     this.objectSlides.update();
    //   }
    // });
   
  }

  



  

  

  


}
