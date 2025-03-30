import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ImgTopComponent } from '../../../../../components/img-top/img-top.component';
import { InputTextComponent } from '../../../../../components/inputs/input-text/input-text.component';
import { ButtonComponent } from '../../../../../components/buttons/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataFormService } from 'src/app/service/utils/data-form.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register-user-form1',
  standalone: true,
  imports: [
    ButtonModule,
    RouterLink,
    ImgTopComponent,
    InputTextComponent,
    ReactiveFormsModule,
    FormsModule,
    ButtonComponent,
    InputTextModule,
    InputGroup,
    InputGroupAddon,
  ],
  templateUrl: './register-user-form1.component.html',
  styleUrl: '../../styles/form-page-syles.scss',
})
export class RegisterUserForm1Component {


   controls = {
    name: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl('')
  }

  constructor(private router: Router, private _dataFormService: DataFormService) {

  }

  nextForm() {
    this._dataFormService.updateSharedData(this.controls)
    this.router.navigate(['/register-user-form2']);
  }
}
