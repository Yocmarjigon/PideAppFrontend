import { Component } from '@angular/core';
import { NavBarBackComponent } from "../../../../components/nav-bar/nav-bar-back/nav-bar-back.component";
import { ProductCardComponent } from 'src/app/components/card/product-card/product-card.component';

@Component({
  selector: 'app-empanada-page',
  imports: [NavBarBackComponent, ProductCardComponent],
  templateUrl: './empanada-page.component.html',
  styleUrl: './empanada-page.component.sass'
})
export class EmpanadaPageComponent {

}
