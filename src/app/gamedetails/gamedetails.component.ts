
import { Component, OnInit } from '@angular/core';
import { TrendingGamesService } from '../trending-games.service';
import { ActivatedRoute } from '@angular/router';
import { ItemDetails } from '../item-details';
@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.component.html',
  styleUrls: ['./gamedetails.component.css']
})
export class GamedetailsComponent implements OnInit {
  constructor(private _TrendingGamesService: TrendingGamesService, private _ActivatedRoute: ActivatedRoute) {
  }
  itemDetails: ItemDetails | undefined;

  similar: ItemDetails[] = [];
  media_type: string = '';
  ngOnInit(): void {
    let { id, mediaType } = this._ActivatedRoute.snapshot.params;
    this.media_type = mediaType
    console.log(this.media_type)
    this._TrendingGamesService.getTrendingDetails(id, mediaType).subscribe({
      next: (data) => {
        console.log(data)
        this.itemDetails = data
      }
    })

    this._TrendingGamesService.getSimilar(id, mediaType).subscribe({
      next: (data) => {
        console.log(data.results)
        this.similar = data.results.filter((item:ItemDetails)=>item.poster_path !==null).slice(0,6)
      }
    })
  }


  anotherDetails(id: number, media_type: string) {

    this._TrendingGamesService.getTrendingDetails(id, media_type).subscribe({
      next: (data) => {
        console.log(data)
        this.itemDetails = data
      }
    })

    this._TrendingGamesService.getSimilar(id,media_type).subscribe({
      next: (data) => {
        console.log(data.results)
        this.similar = data.results.filter((item:ItemDetails)=>item.poster_path !==null).slice(0,6)
      }
    })
  }
}
