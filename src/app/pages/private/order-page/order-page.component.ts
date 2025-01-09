import { Component } from '@angular/core';
import { ImgTopComponent } from "../../../components/img-top/img-top.component";

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [ImgTopComponent],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.scss'
})
export class OrderPageComponent {

}
