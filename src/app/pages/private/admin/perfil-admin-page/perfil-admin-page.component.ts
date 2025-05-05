import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonComponent } from 'src/app/components/buttons/button/button.component';
import { InputTextComponent } from 'src/app/components/inputs/input-text/input-text.component';

@Component({
  selector: 'app-perfil-admin-page',
  imports: [
    InputTextComponent,
    ButtonComponent,
    InputGroupAddonModule,
    InputGroupModule,
    InputTextModule,
    RouterLink,
    ConfirmDialogModule
  ],
  providers: [ConfirmationService],
  templateUrl: './perfil-admin-page.component.html',
  styleUrl: './perfil-admin-page.component.sass'
})
export class PerfilAdminPageComponent {
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
