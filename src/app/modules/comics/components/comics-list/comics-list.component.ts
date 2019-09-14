import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss']
})
export class ComicsListComponent implements OnInit {

  comics: any;

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.marvelService.getList('comics', {}).subscribe((response: any) => {
      console.log(response);
      this.comics = response.data.results;
    });
  }

}
