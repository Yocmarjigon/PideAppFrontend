import { Component } from '@angular/core';
import { ImgTopComponent } from '../../../../components/img-top/img-top.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-select-page',
  standalone: true,
  imports: [ImgTopComponent, RouterLink],
  templateUrl: './register-select-page.component.html',
  styleUrl: './register-select-page.component.scss',
})
export class RegisterSelectPageComponent {}
