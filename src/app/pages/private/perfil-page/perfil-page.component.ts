import { Component } from '@angular/core';
import { ImgTopPrivateComponent } from "../../../components/img-top-private/img-top-private.component";
import { ImgTopComponent } from "../../../components/img-top/img-top.component";
import { InputTextComponent } from "../../../components/inputs/input-text/input-text.component";
import { ButtonComponent } from "../../../components/buttons/button/button.component";

@Component({
  selector: 'app-perfil-page',
  standalone: true,
  imports: [ImgTopComponent, InputTextComponent, ButtonComponent],
  templateUrl: './perfil-page.component.html',
  styleUrl: '/src/app/pages/public/register/styles/form-page-syles.scss'
})
export class PerfilPageComponent {
perfil = "Perfil"
nextForm(){}

}
