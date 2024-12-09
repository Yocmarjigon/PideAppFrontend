import { Component } from '@angular/core';
import { InputTextComponent } from '../../../components/inputs/input-text/input-text.component';
import { ButtonComponent } from '../../../components/buttons/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    InputTextComponent,
    ButtonComponent,
    FormsModule
    ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  onVisual = false;

  login() {
    console.log('hola');
  }

  changeVisual() {
    this.onVisual = !this.onVisual;
    console.log(this.onVisual);
  }
}
