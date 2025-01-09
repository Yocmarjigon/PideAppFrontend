import { Component } from '@angular/core';
import { ImgTopComponent } from "../../../components/img-top/img-top.component";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ImgTopComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

}
