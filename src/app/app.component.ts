import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkWithHref],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit{
  title = 'el-mirador-kf';

  ngOnInit(): void {
    initFlowbite();
  }
}
