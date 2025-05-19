import { inject, Injectable } from '@angular/core';
import {
  Camera,
  CameraResultType,
  CameraSource,
  type Photo,
} from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';
import { SupabaseService } from '../supabase.service';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private _supabaseClient = inject(SupabaseService).supabaseClient;

  async takePhoto(): Promise<string> {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    return this.readAsBase64(image);
  }

  async uploadImage(file: File, pathPrefix: string): Promise<string | null> {
    const fileName = `${Date.now()}_${file.name}`;
    const filePath = `${pathPrefix}/${fileName}`;
    console.log(file)
    const {data, error} = await this._supabaseClient.storage
      .from('imagenes')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.error('Error al subir la imagen: ', error);
      return null;
    }
    console.log(data);

    // Obtener URL pública


    return filePath || null;
  }

  private async readAsBase64(photo: Photo): Promise<string> {
    if (!photo.webPath) throw new Error('No photo selected');

    if (Capacitor.isNativePlatform()) {
      const file = await Filesystem.readFile({
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        path: photo.path!,
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
