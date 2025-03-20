import { Component } from '@angular/core';
import { ButtonCarComponent } from "../../buttons/button-car/button-car.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-top',
  standalone: true,
  imports: [ButtonCarComponent],
  templateUrl: './nav-bar-top.component.html',
  styleUrl: './nav-bar-top.component.scss'
})
export class NavBarTopComponent {

  constructor(
    private readonly router:Router
  ){

  }
  logout(){
    this.router.navigateByUrl("/login-page")
    console.log("kjksdjf")
  }

}
