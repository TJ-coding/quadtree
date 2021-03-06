import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { ProcessImagesService } from '../shared/process-images.service';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {

  listOfImages = [
    'portrait',
    'p2',
    'p3',
    'artwall',
    'boris',
    'pixels',
    'quadfile',
    'rgb',
    'bush',
    'earth',
    'landscape1',
];
  appUrl = environment.apiUrl;

  constructor(private imageService: ProcessImagesService) { }

  ngOnInit() {
    this.processImages();
  }

  processImages() {
    const num = this.listOfImages.length;
    for (let i = 0; i < num; i++) {
      this.getImage(this.listOfImages[i]);
    }
  }

  getImage(source) {
    this.imageService.getNumberOfImages(source).subscribe((data) => {

      // tslint:disable-next-line: no-string-literal
      for (let i = 0, p = Promise.resolve(); i < data['num_of_files']; i++) {
        p = p.then(_ => new Promise(resolve =>
          setTimeout(() => {
            document.getElementById(source).setAttribute('src', this.appUrl + '/test/' + source + '/' + source + (i + 1) + '.png');
            resolve();
          }, Math.random() * 500)
        ));
      }
    }
    );
  }


}

