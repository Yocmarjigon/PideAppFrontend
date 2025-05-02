import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { StatusBar } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, ProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  title = 'PideYaApp';
  async ngOnInit() {
    if (Capacitor.isNativePlatform()) { // Solo si estamos en Android/iOS
      await StatusBar.setOverlaysWebView({ overlay: false });
    }

  }
}
