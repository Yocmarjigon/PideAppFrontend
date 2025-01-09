import { Component } from '@angular/core';
import { ImgTopComponent } from "../../../components/img-top/img-top.component";

@Component({
  selector: 'app-car-page',
  standalone: true,
  imports: [ImgTopComponent],
  templateUrl: './car-page.component.html',
  styleUrl: './car-page.component.scss'
})
export class CarPageComponent {

}
