import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private readonly url = "http://localhost:3000"

  constructor(
    private http: HttpClient
  ) { }

  getAllFilms(): Observable<any> {
    return this.http.get(`${this.url}/films`)
  }

  addFilm(data: any): Observable<any>{
    console.log("here", data)
    return this.http.post(`${this.url}/films/create`, data)
  }
}
