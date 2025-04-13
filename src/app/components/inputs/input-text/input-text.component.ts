import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() id = '';
  @Input() control!: FormControl;
  @Input() icon = '';
  @Input() active = false;
  @Input() onVisual = false;
  @Input() fun:any;
  @Input() type = '';

  changeVisual() {
    this.onVisual = !this.onVisual;
  }



}
