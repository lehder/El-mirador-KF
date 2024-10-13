import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-custon-swiper',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>custon-swiper works!</p>`,
  styleUrl: './custon-swiper.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustonSwiperComponent { }
