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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  @Input() click = () => {};

  ejClick() {
    this.click();
  }
}
