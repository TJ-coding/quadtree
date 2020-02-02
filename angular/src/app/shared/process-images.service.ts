import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessImagesService {

  API_URL = 'http://35.238.117.10';

  constructor(private httpClient: HttpClient) { }

  getNumberOfImages(id) {
    return this.httpClient.get(`${this.API_URL}/get_image?ImgName=test/` + id);
  }

}
