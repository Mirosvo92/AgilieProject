import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {CollectionComponent} from './pages/collection/collection.component';
import {UploadComponent} from './pages/upload/upload.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'collection', component: CollectionComponent},
  { path: 'upload', component: UploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
