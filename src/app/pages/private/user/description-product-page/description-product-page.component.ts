import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { DescriptionSendDataComponentService } from 'src/app/service/utils/description-send-data-component.service';
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

  constructor(private sendServiceData: DescriptionSendDataComponentService) {}

  ngOnInit(): void {

    /* this.sendServiceData.data.subscribe((d) => {
      this.product = d;
    });
    console.log(this.product); */
  }
}
