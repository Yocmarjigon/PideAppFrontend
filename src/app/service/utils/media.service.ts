import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, type Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  async takePhoto(): Promise<string> {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    return this.readAsBase64(image);
  }

  async pickFromGallery(): Promise<string> {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos
    });

    return this.readAsBase64(image);
  }

  private async readAsBase64(photo: Photo): Promise<string> {
    if (!photo.webPath) throw new Error('No photo selected');

    if (Capacitor.isNativePlatform()) {
      const file = await Filesystem.readFile({
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        path: photo.path!
      });
      return `data:image/jpeg;base64,${file.data}`;
    // biome-ignore lint/style/noUselessElse: <explanation>
    } else {
      const response = await fetch(photo.webPath);
      const blob = await response.blob();
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      });
    }
  }

}
