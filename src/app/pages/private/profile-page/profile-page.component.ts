import { Component } from '@angular/core';
import { ImgTopComponent } from "../../../components/img-top/img-top.component";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ImgTopComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

}
