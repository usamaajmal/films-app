import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFilmComponent } from './components/films/add-film/add-film.component';
import { AllFilmsComponent } from './components/films/all-films/all-films.component';

const routes: Routes = [
  {
    path: 'films',
    component: AllFilmsComponent,
    pathMatch: 'full'
  },
  {
    path: 'addFilm',
    component: AddFilmComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'films',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
