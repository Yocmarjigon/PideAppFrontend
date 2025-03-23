import { Component, Input, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';


@Component({
  selector: 'app-form-product',
  imports: [DropdownModule, DialogModule, ReactiveFormsModule, ButtonModule, ToggleSwitchModule],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.sass',
})
export class FormProductComponent {
  @Input() displayModal = signal(false);

  productForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    category: new FormControl('', Validators.required),
    available: new FormControl('', Validators.required),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    img: new FormControl('', Validators.required),
  });

  hideDialog() {}
  categories: any[] | undefined;
  saveProduct() {
    throw new Error('Method not implemented.');
  }
}
