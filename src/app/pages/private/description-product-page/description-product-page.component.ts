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
    this.product = {
      id: 1,
      nameProduct: 'Arepa de huevo',
      img: '/assets/images/arepa-de-huevo.jpeg',
      description:
        'Lorem ipsum odor amet, consectetuer adipiscing elit. Id nunc id dignissim velit ultrices. Hendrerit vitae elit proin suspendisse vel integer. Ornare varius magna nostra hac class congue diam torquent luctus. Viverra dignissim fames tellus tempor congue. Convallis praesent proin maximus facilisi eleifend convallis scelerisque semper. Leo nunc luctus nascetur lacinia phasellus fusce class quis. Fusce et auctor eleifend ut rhoncus vitae. Sapien hendrerit in maecenas class eu ante aliquet dis?',
      price: 2000,
    };

    /* this.sendServiceData.data.subscribe((d) => {
      this.product = d;
    });
    console.log(this.product); */
  }
}
