import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrendingGamesService {

  constructor(private _HttpClient:HttpClient) { }
  


  getTrending(mediatype:string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediatype}/week?api_key=709afb783f6293c899828fc218030047`)
  }


  getTrendingDetails(id:number  , mediatype:string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediatype}/${id}?api_key=709afb783f6293c899828fc218030047&language=en-US`)
  }


  getSimilar(id:number  , mediatype:string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediatype}/${id}/similar?api_key=709afb783f6293c899828fc218030047&language=en-US&page=1`)
  }





  getMovies(pageNumber: number ): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=709afb783f6293c899828fc218030047&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${pageNumber}`)
  }

  getTv(pageNumber: number): Observable<any> {
    return this._HttpClient.get(` https://api.themoviedb.org/3/discover/tv?api_key=709afb783f6293c899828fc218030047&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${pageNumber}`)
  }

  getActors(pageNumber: number): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=709afb783f6293c899828fc218030047&language=en-US&page=${pageNumber}`)
  }
}
