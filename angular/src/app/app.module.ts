import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './shared/api.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddImageComponent } from './add-image/add-image.component';
import { EditImageComponent } from './edit-image/edit-image.component';
import { ImagesListComponent } from './images-list/images-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddImageComponent,
    EditImageComponent,
    ImagesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
