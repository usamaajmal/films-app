import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllFilmsComponent } from './components/films/all-films/all-films.component';
import { FilmDetailsComponent } from './components/films/film-details/film-details.component';
import { AddFilmComponent } from './components/films/add-film/add-film.component';

@NgModule({
  declarations: [
    AppComponent,
    AllFilmsComponent,
    FilmDetailsComponent,
    AddFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
