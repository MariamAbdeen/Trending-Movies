import { Component, OnInit } from '@angular/core';
import { TrendingGamesService } from '../trending-games.service';
import { MoviesTvPeople } from '../movies-tv-people';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _TrendingGamesService: TrendingGamesService) { }

  trendingMovies: MoviesTvPeople[] = []
  trendingTv: MoviesTvPeople[] = []
  trendingPeople: MoviesTvPeople[] = []
  ngOnInit(): void {
    this._TrendingGamesService.getTrending('movie').subscribe({
      next: (response) => {
        console.log(response.results)
        this.trendingMovies = response.results.slice(0,10)
      }
    })
    this._TrendingGamesService.getTrending('tv').subscribe({
      next: (response) => {
        console.log(response.results)
        this.trendingTv = response.results.slice(0,10)
      }
    })
    this._TrendingGamesService.getTrending('person').subscribe({
      next: (response) =>{
        console.log(response.results)
        this.trendingPeople = response.results.slice(0, 10)
      }
    })
  }
}
