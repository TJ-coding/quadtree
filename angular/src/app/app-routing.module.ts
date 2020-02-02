import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddImageComponent } from './add-image/add-image.component';
import { EditImageComponent } from './edit-image/edit-image.component';
import { ImagesListComponent } from './images-list/images-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'images-list' },
  { path: 'add-image', component: AddImageComponent },
  { path: 'edit-image/:id', component: EditImageComponent },
  { path: 'images-list', component: ImagesListComponent },
  { path: '**', redirectTo: 'images-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
