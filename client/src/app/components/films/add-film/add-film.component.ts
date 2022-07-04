import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  filmsForm = this.formBuilder.group({
    name: '',
    description: '',
    release_date: '',
    rating: '',
    ticket_price: '',
    country: '',
    genre: ''
  });
  image: any

  constructor(private formBuilder: FormBuilder, private filmsService: FilmsService) { }

  ngOnInit(): void {
  }
  fileChoosen(event: any){
    if(event.target.value){
      this.image = <File>event.target.files[0]
    }
  }
  onSubmit(): void {
    let data = this.filmsForm.value
    data.genre = data.genre.split(',')
    console.log(this.image)
    data.photo= this.image
    console.log(data, this.image)
    this.filmsService.addFilm(data).subscribe(res=> {
      console.warn('Youhave added a film', data, res);
      this.filmsForm.reset();

    })
  }
}
