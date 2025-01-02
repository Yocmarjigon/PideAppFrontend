import { Component } from '@angular/core';

@Component({
  selector: 'app-button-car',
  standalone: true,
  imports: [],
  templateUrl: './button-car.component.html',
  styleUrl: './button-car.component.scss'
})
export class ButtonCarComponent {
cantProduct = 0;

addProductCar(){
  this.cantProduct++
  console.log("sfd")
}

}
