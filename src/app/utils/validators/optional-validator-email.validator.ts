import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function optionalEmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim();

    if (!value) {
      return null; // No hay valor, no hay validación (es válido)
    }

    console.log("validacion")

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? null : { invalidEmail: true };
  };
}
