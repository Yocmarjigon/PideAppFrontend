import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchPasswordValidator(
  controlName: string,  // Nombre del primer campo (ej: 'password')
  matchingControlName: string  // Nombre del segundo campo (ej: 'confirmPassword')
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    if (!control || !matchingControl) {
      return null; // No hay controles para comparar
    }

    // Si el campo de comparación ya tiene errores (pero no el de 'no coincidencia'), no hagas nada
    if (matchingControl.errors && !matchingControl.errors['mismatch']) {
      return null;
    }

    // Compara los valores
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mismatch: true }); // Asigna el error
      return { mismatch: true };
    } else {
      matchingControl.setErrors(null); // Limpia el error si coinciden
      return null;
    }
  };
}
