import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss']
})
export class ComicsListComponent implements OnInit {

  comics = [];
  offset = 0;
  busy = false;

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.loadMore();
  }

  loadMore() {
    const params = {
      offset: this.offset
    };
    if (!this.busy) {
      this.busy = true;
      this.marvelService.getList('comics', params).subscribe((response: any) => {
        console.log(response);
        this.comics = this.comics.concat(response.data.results);
        this.offset += response.data.count;
        this.busy = false;
      });
    }
  }

}
