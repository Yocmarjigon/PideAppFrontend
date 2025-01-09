import { Component } from '@angular/core';
import { InputTextComponent } from '../../../components/inputs/input-text/input-text.component';
import { ButtonComponent } from '../../../components/buttons/button/button.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ImgTopComponent } from "../../../components/img-top/img-top.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [InputTextComponent, ButtonComponent, FormsModule, ImgTopComponent, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  onVisual = false;

  constructor(private readonly router: Router) {}

  login() {
    this.router.navigateByUrl("/layout/home-page")
    
  }

  changeVisual() {
    this.onVisual = !this.onVisual;
    console.log(this.onVisual);
  }
}
