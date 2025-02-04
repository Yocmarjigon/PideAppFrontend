import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-circle',
  standalone: true,
  imports: [],
  templateUrl: './button-circle.component.html',
  styleUrl: './button-circle.component.scss',
})
export class ButtonCircleComponent {
  @Input() icon = '';
  @Input() click: any;

  ejClick(){
    this.click()
  }
}
