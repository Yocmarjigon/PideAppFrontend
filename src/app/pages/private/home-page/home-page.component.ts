import { Component } from '@angular/core';
import { ImgTopComponent } from "../../../components/img-top/img-top.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ImgTopComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
