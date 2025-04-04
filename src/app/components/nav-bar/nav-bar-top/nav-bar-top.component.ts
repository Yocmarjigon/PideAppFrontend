import { Component } from '@angular/core';
import { ButtonCarComponent } from "../../buttons/button-car/button-car.component";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-nav-bar-top',
  standalone: true,
  imports: [ButtonCarComponent],
  templateUrl: './nav-bar-top.component.html',
  styleUrl: './nav-bar-top.component.scss'
})
export class NavBarTopComponent {

  constructor(
    private _authService: AuthService,
    private readonly router:Router
  ){

  }
  async logout(){
    await this._authService.signOut()
    this.router.navigateByUrl("/login-page")

  }

}
