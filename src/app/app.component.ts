import { CommonModule, } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CustonSwiperComponent } from './custon-swiper/custon-swiper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkWithHref, CustonSwiperComponent],
  template: '<router-outlet></router-outlet>',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit{
  title = 'el-mirador-kf';

  ngOnInit(): void {
    initFlowbite();
  }
}
