import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { TranslateService } from '@ngx-translate/core';
import { QrScannerService } from '../../services/qr-escanear.service';

@Component({
  selector: 'app-escanearqr',
  templateUrl: './escanearqr.page.html',
  styleUrls: ['./escanearqr.page.scss'],
})
export class EscanearqrPage {
  langs: string[] = [];
  idioma!: string;
  imageSource: any;

  constructor(
    private transService: TranslateService,
    private qrScannerService: QrScannerService // Inyecta el servicio de escaneo de códigos QR
  ) {
    this.langs = this.transService.getLangs();
  }

  takePicture = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
      });

      if (image && image.dataUrl) {
        this.imageSource = image.dataUrl;

        // Aquí puedes manejar el código QR escaneado
        const qrCode = await this.qrScannerService.scanCodeFromDataUrl(image.dataUrl);
        console.log('Código QR escaneado:', qrCode);
      } else {
        console.error('La imagen o el Data URL es undefined.');
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }

  changeLangs(event: any) {
    this.transService.use(event.detail.value);
  }
}
