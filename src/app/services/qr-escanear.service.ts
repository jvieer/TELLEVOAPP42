import { Injectable } from '@angular/core';
import { BrowserMultiFormatReader, NotFoundException, Result } from '@zxing/library';

@Injectable({
  providedIn: 'root'
})
export class QrScannerService {
  private codeReader: BrowserMultiFormatReader;

  constructor() {
    this.codeReader = new BrowserMultiFormatReader();
  }

  async scanCode(videoElement: HTMLVideoElement): Promise<string> {
    try {
      const result = await this.codeReader.decodeOnceFromVideoDevice(undefined, videoElement);
      return this.getResultText(result);
    } catch (err) {
      if (err instanceof NotFoundException) {
        console.error('No se encontraron códigos QR.');
      } else {
        console.error('Error al escanear el código QR:', err);
      }
      throw err;
    }
  }

  async scanCodeFromDataUrl(dataUrl: string): Promise<string> {
    try {
      const result = await this.codeReader.decodeFromImage(undefined, dataUrl);
      return this.getResultText(result);
    } catch (err) {
      if (err instanceof NotFoundException) {
        console.error('No se encontraron códigos QR.');
      } else {
        console.error('Error al escanear el código QR desde Data URL:', err);
      }
      throw err;
    }
  }

  private getResultText(result: Result): string {
    return result.getText();
  }
}
