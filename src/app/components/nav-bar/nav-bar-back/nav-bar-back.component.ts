import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-back',
  imports: [
    RouterLink
  ],
  templateUrl: './nav-bar-back.component.html',
  styleUrl: './nav-bar-back.component.sass'
})
export class NavBarBackComponent {

@Input() router = "/login-page";
@Input() icon = "pi pi-home";

}
