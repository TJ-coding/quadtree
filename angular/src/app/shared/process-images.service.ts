import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcessImagesService {

  API_URL = environment.apiUrl;
  API_IMG_URL = environment.apiImgUrl;

  constructor(private httpClient: HttpClient) { }

  getNumberOfImages(id) {
    return this.httpClient.get(`${this.API_URL}/get_image?ImgName=${this.API_IMG_URL}/` + id);
  }

}
