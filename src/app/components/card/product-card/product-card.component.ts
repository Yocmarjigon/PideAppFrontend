import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { DescriptionSendDataComponentService } from 'src/app/service/utils/description-send-data-component.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  
  @Input() product:Product ={
    nameProduct: '',
    price: 0,
    img: ''
  }

  constructor(private route: Router, private sendServiceData: DescriptionSendDataComponentService) {}
  
  ngOnInit(){
    
  }


  routerSelectProduct() {
    this.sendServiceData.changeData(this.product)
    this.route.navigateByUrl("/description-product-page");

  }

  


}
