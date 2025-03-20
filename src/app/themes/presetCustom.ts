
//mypreset.ts
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const PresetCustom = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#FFF2F0',
      100: '#FFD9D2',
      200: '#FFB8A8',
      300: '#FF937D',
      400: '#FF6E52',
      500: '#FF4E2E',
      600: '#E54629',
      700: '#CC3E24',
      800: '#B3361F',
      900: '#992E1A',
      950: '#802615'
    }
  }
});
