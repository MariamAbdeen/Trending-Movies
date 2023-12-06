import { Component, OnInit } from '@angular/core';
import { TrendingGamesService } from '../trending-games.service';
import { ItemDetails } from '../item-details';
@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  constructor(private _TrendingGamesService: TrendingGamesService) { }
  tv: ItemDetails[] = []
  mediaType:string ='tv'
  ngOnInit(): void {
    this._TrendingGamesService.getTv(this.pageNumber).subscribe({
      next: (data) => {
        console.log(data.results)
        this.tv = data.results.filter((item:ItemDetails)=>item.poster_path !==null).slice(0,18)
      }
    })
  }




  pageNumber: number = 1;
  TotalPages: number = 10;
  
  getpageNumber(Number: number) {
    this.pageNumber= Number
    console.log(this.pageNumber)
    this._TrendingGamesService.getTv(this.pageNumber).subscribe({
      next: (data) => {
        console.log(data.results)
        this.tv = data.results.filter((item: ItemDetails) => item.poster_path !== null).slice(0, 18)
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
