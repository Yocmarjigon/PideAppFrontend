import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {

  @Input() label = '';
  @Input() type = '';
  @Input() click: any;
  @Input() iconActive = false
  @Input() icon = ''
  constructor(
    private readonly router:Router
  ){

  }

  ejClick(){
    this.click()
  }
}
