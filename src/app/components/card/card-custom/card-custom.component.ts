import { DescriptionSendDataComponentService } from 'src/app/service/utils/description-send-data-component.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProductService } from 'src/app/service/products/product.service';

@Component({
  selector: 'app-card-custom',
  imports: [ButtonModule, CommonModule],
  templateUrl: './card-custom.component.html',
  styleUrl: './card-custom.component.sass',
})
export class CardCustomComponent {
  @Input() srcImg: any;
  @Input() alt: any;
  @Input() title: any;
  @Input() price: any;
  @Input() showImg = true;
  @Input() showPrice = true;
  @Input() showQuantity = true;
  @Input() quantity = 0;
  @Input() id = '';
  @Input() clickDetail = () => {};
  constructor(
    private router: Router,
    private _descriptionSendDataService: DescriptionSendDataComponentService,
    private _productService: ProductService
  ) {}
  onClickDelete() {
    console.log(this.id);
    this._productService.deleteProduct(this.id).subscribe({
      next: (r) => {
        console.log(r);
      },
      error:(e)=>{
        console.log(e)
      }
    });
  }
  onClickDetail() {
    this.router.navigateByUrl('/product-detail-page');
    console.log(this.id);
    this._descriptionSendDataService.sendId(this.id);
  }
}
