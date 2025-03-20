import { Component, Input } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-input-password',
  imports: [PasswordModule, InputGroupModule, InputGroupAddonModule, InputTextModule],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.sass',
})
export class InputPasswordComponent {
  showPassword = false;
@Input() placeholder = "";


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
