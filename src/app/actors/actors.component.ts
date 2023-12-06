import { Component } from '@angular/core';
import { TrendingGamesService } from '../trending-games.service';
import { ItemDetails } from '../item-details';
@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
  constructor(private _TrendingGamesService: TrendingGamesService){}
  actors: ItemDetails[]=[]
  mediaType:string ='person'
  ngOnInit(): void {
    this._TrendingGamesService.getActors(this.pageNumber).subscribe({
      next:(data)=>{
        console.log(data.results)
        this.actors =data.results.filter((item:ItemDetails)=>item.profile_path!==null).slice(0,18)}
    })
  }






  pageNumber: number = 1;
  TotalPages: number = 10;
  
  getpageNumber(Number: number) {
    this.pageNumber= Number
    console.log(this.pageNumber)
    this._TrendingGamesService.getActors(this.pageNumber).subscribe({
      next: (data) => {
        console.log(data.results)
        this.actors = data.results.filter((item: ItemDetails) => item.profile_path !== null).slice(0, 18)
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
