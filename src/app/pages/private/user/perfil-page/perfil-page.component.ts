import { Component, signal } from '@angular/core';
import { InputTextComponent } from '../../../../components/inputs/input-text/input-text.component';
import { ButtonComponent } from '../../../../components/buttons/button/button.component';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-perfil-page',
  standalone: true,
  imports: [
    InputTextModule,
    InputTextComponent,
    ButtonComponent,
    InputGroupAddonModule,
    InputGroupModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
  templateUrl: './perfil-page.component.html',
  styleUrl: '/src/app/pages/public/register/styles/form-page-syles.scss',
})
export class PerfilPageComponent {
  showModal = signal(true);
  constructor(
    private router: Router,
    private _confirmationService: ConfirmationService
  ) {}

  signOut() {
    localStorage.clear();
    this.router.navigateByUrl('/login-page');
  }

  confirmSignOut(event: Event) {
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Estas seguro que quieres cerrar sesión',
      header: 'Confirmación',
      closable: true,
      closeOnEscape: true,
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: 'Cancelar',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Confirmar',
      },
      accept: () => {
        this.signOut();
      },
      reject: () => {
        this.onDialogHide();
      },
    });
  }
  onDialogHide() {
    this.showModal.set(false);
    // Quitar cualquier overlay que haya quedado pegado
    const overlays = document.querySelectorAll(
      '.p-confirm-dialog-mask, .p-dialog-mask, .p-overlay'
    );
    overlays.forEach(el => el.classList.add('hidden'));

    // Quitar bloqueo de scroll (por si quedó)
    document.body.classList.remove('p-overflow-hidden');
    setTimeout(() => this.showModal.set(true), 0);
  }
}
