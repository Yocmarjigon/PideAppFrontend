import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-top',
  standalone: true,
  imports: [],
  templateUrl: './img-top.component.html',
  styleUrl: './img-top.component.scss'
})
export class ImgTopComponent {
 @Input() title = '';

}
