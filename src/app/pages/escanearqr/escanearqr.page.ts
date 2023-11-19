import { Component, OnInit } from '@angular/core';
import {Camera, CameraResultType } from '@capacitor/camera';
import {CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-escanearqr',
  templateUrl: './escanearqr.page.html',
  styleUrls: ['./escanearqr.page.scss'],
})
export class EscanearqrPage {
  langs: string[] = [];
  idioma!: string;
  imageSource: any;
  constructor(private transService: TranslateService) {
    this.langs = this.transService.getLangs();
   }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Prompt
    });

    this.imageSource=image.dataUrl;
}
changeLangs(event: any){
  this.transService.use(event.detail.value);
}

}






