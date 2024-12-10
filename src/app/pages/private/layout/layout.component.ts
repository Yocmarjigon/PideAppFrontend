import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarTopComponent } from 'src/app/components/nav-bar/nav-bar-top/nav-bar-top.component';
import { NavBarBottonComponent } from "../../../components/nav-bar/nav-bar-botton/nav-bar-botton.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NavBarTopComponent,
    RouterOutlet,
    NavBarBottonComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
