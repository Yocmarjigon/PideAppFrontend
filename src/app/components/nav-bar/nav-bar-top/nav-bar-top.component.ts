import { Component } from '@angular/core';
import { ButtonCarComponent } from "../../buttons/button-car/button-car.component";

@Component({
  selector: 'app-nav-bar-top',
  standalone: true,
  imports: [ButtonCarComponent],
  templateUrl: './nav-bar-top.component.html',
  styleUrl: './nav-bar-top.component.scss'
})
export class NavBarTopComponent {

}
