import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ImgTopComponent } from '../../../../../components/img-top/img-top.component';
import { InputTextComponent } from '../../../../../components/inputs/input-text/input-text.component';
import { ButtonComponent } from '../../../../../components/buttons/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DataFormService } from 'src/app/service/utils/data-form.service';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-register-user-form1',
  standalone: true,
  imports: [
    ButtonModule,
    RouterLink,
    ImgTopComponent,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    InputGroup,
    InputGroupAddon,
    MessageModule,
    InputNumberModule,
  ],
  providers: [Validators],
  templateUrl: './register-user-form1.component.html',
  styleUrl: '../../styles/form-page-syles.scss',
})
export class RegisterUserForm1Component {
  formClient1: FormGroup;

  constructor(
    private router: Router,
    private _dataFormService: DataFormService,
    private fb: FormBuilder
  ) {
    this.formClient1 = fb.group({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{10,}$/),
      ]),
      address: new FormControl('', [Validators.required]),
    });
    this.formClient1.get('phone')?.statusChanges.subscribe(() =>
      console.log(this.formClient1.get('phone')?.hasError('pattern'))
    );
  }

  nextForm() {
    this._dataFormService.updateSharedData(this.formClient1.controls);
    this.router.navigate(['/register-user-form2']);
  }
}
