import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, HomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
