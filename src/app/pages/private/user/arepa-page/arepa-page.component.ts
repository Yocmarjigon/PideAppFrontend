import { Component, OnInit, signal } from '@angular/core';
import { NavBarBackComponent } from "../../../../components/nav-bar/nav-bar-back/nav-bar-back.component";
import { ProductService } from 'src/app/service/products/product.service';
import { Product } from 'src/app/models/Product';
import { ProductCardComponent } from "../../../../components/card/product-card/product-card.component";
import { Router } from '@angular/router';
import { SendDataComponentsService } from 'src/app/service/utils/send-data-components.service';
import { SpinnerComponent } from "../../../../components/loading/spinner/spinner.component";

@Component({
  selector: 'app-arepa-page',
  imports: [NavBarBackComponent, ProductCardComponent, SpinnerComponent],
  templateUrl: './arepa-page.component.html',
  styleUrl: './arepa-page.component.sass'
})
export class ArepaPageComponent implements OnInit {

  products: Product[] = [];
  loading= signal(true);
  notFoudData = signal(false);
  constructor(
    private _productService: ProductService,
    private router: Router,
    private _sendDataComponentService: SendDataComponentsService
  ) { }

  openDetailProuct(product: Product) {
    this.router.navigateByUrl('/description-product-page');
    this._sendDataComponentService.setProduct(product);
  }
  ngOnInit() {
    this._productService.getProductsByCategory('arepas').subscribe({
      next: (p) => {
        this.products = p;
      },
      error: (e) => {
        console.log(e);
        if(e.status == 404){
          this.notFoudData.set(true);
        }

        this.loading.set(false);
      },
      complete: () => {
        this.loading.set(false);
      },
    });

  }

}
