import { Component } from '@angular/core';
import { NavBarBackComponent } from "../../../../components/nav-bar/nav-bar-back/nav-bar-back.component";
import { ProductCardComponent } from "../../../../components/card/product-card/product-card.component";
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-patacon-page',
  imports: [NavBarBackComponent, ProductCardComponent],
  templateUrl: './patacon-page.component.html',
  styleUrl: './patacon-page.component.sass'
})
export class PataconPageComponent {
  products : Product[] = []
}
