import { Component, OnInit } from '@angular/core';
import { TrendingGamesService } from '../trending-games.service';
import { ItemDetails } from '../item-details';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  x: any;
  constructor(private _TrendingGamesService: TrendingGamesService) { }
  Movies: ItemDetails[] = []
  mediaType: string = 'movie'
  // pageNumber: number = 1;
  // TotalPages: number;
  ngOnInit(): void {
    this._TrendingGamesService.getMovies(this.pageNumber).subscribe({
      next: (data) => {
        console.log(data)
        console.log(data.results)
        this.Movies = data.results.filter((item: ItemDetails) => item.poster_path !== null).slice(0, 18)
        // this.TotalPages = data.total_pages
      }
    })
  }



  pageNumber: number = 1;
  TotalPages: number = 10;
  
  getpageNumber(Number: number) {
    this.pageNumber= Number
    console.log(this.pageNumber)
    this._TrendingGamesService.getMovies(this.pageNumber).subscribe({
      next: (data) => {
        console.log(data.results)
        this.Movies = data.results.filter((item: ItemDetails) => item.poster_path !== null).slice(0, 18)
      }
    })
  }



  getNextPage() {
    if (this.pageNumber >= this.TotalPages) {
      this.pageNumber = 1
      this.getpageNumber(this.pageNumber)
    
    }
    else{
      this.pageNumber++
      this.getpageNumber(this.pageNumber)
    }
   
  }






  getPreviousPage() {

    if (this.pageNumber <= 1) {
      this.pageNumber = this.TotalPages
      this.getpageNumber(this.pageNumber)
     
    }
    else{
      this.pageNumber--
      this.getpageNumber(this.pageNumber)
    }
  }
  
}
