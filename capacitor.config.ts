import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'pide.ya.app',
  appName: 'pide-ya-app',
  webDir: './dist/pide-ya-app/browser',
  plugins:{
    CapacitorHttp:{
      enabled: true
    }
  }
};

export default config;
