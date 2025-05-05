import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SendDataComponentsService } from 'src/app/service/utils/send-data-components.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CardModule,ButtonModule, RouterLink],
  providers: [SendDataComponentsService],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() id = '';

  @Input() product:Product ={
    title: '',
    price: 0,
    img: '',
    available: false,
    stock: 0
  }



  constructor(
    private _sendDataComponentService: SendDataComponentsService
  ) {

  }

}
