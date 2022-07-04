import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-all-films',
  templateUrl: './all-films.component.html',
  styleUrls: ['./all-films.component.css']
})
export class AllFilmsComponent implements OnInit {

  films: any

  constructor(
    private filmService: FilmsService
  ) { }

  ngOnInit(): void {
    this.filmService.getAllFilms().subscribe(res => {
      this.films = res.films
    })
  }

}
