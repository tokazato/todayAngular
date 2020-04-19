import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit, AfterViewInit {
  // mySwiper = Swiper;

  mySwiper = new Swiper('.swiper-container', { /* ... */ });

  slides = [
    {
      img: '../../../assets/img/image.png',
      title: 'წლის შეთავაზება მოდელი',
      description: 'მოდელი შეიქმნა 2010 წელს',
    },
    {
      img: '../../../assets/img/Background.png',
      title: 'საუკეთესო შეთავაზება მოდელი',
      description: 'მოდელი შეიქმნა 2012 წელს',
    },
    {
      img: '../../../assets/img/image.png',
      title: 'წლის შეთავაზება მოდელი',
      description: 'მოდელი შეიქმნა 2015 წელს',
    },
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.mySwiper)
    //   var mySwiper = new Swiper('.swiper-container', {
    //     pagination: '.swiper-pagination',
    //     paginationClickable: true,
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     // autoplay: 3000,
    //     spaceBetween: 30
    // });
  }

  ngAfterViewInit() {
    // var mySwiper = new Swiper('.swiper-container', {
    //     pagination: '.swiper-pagination',
    //     paginationClickable: true,
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     autoplay: 3000,
    //     spaceBetween: 30
    // });

  }

}
