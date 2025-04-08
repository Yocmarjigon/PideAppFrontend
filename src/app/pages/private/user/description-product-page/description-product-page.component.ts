import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { InputNumberModule } from 'primeng/inputnumber';
import { StyleClass, StyleClassModule } from 'primeng/styleclass';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-description-product-page',
  standalone: true,
  imports: [StyleClassModule, RouterLink, InputNumberModule, FormsModule],
  templateUrl: './description-product-page.component.html',
  styleUrl: './description-product-page.component.scss',
})
export class DescriptionProductPageComponent implements OnInit {
  product!: Product;
  value = 1;

  constructor() {}

  ngOnInit(): void {

    /* this.sendServiceData.data.subscribe((d) => {
      this.product = d;
    });
    console.log(this.product); */
  }
}
