import { SkeletonModule } from 'primeng/skeleton';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-view-loading',
  imports: [
    SkeletonModule
  ],
  templateUrl: './data-view-loading.component.html',
  styleUrl: './data-view-loading.component.sass'
})
export class DataViewLoadingComponent {

}
