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
  max = Infinity;
  busy = false;
  titleStartsWith = '';

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.getComics(undefined);
  }

  loadMore() {
    const params = {
      offset: this.offset
    };
    this.getComics(params);
  }

  getComics(params) {
    if (!params) {
      params = {
        offset: this.offset
      };
    }
    if (!this.busy && this.offset < this.max) {
      if (this.titleStartsWith) {
        params.titleStartsWith = this.titleStartsWith;
      }
      this.busy = true;
      this.marvelService.getList('comics', params).subscribe((response: any) => {
        console.log(response);
        this.comics = this.comics.concat(response.data.results);
        this.offset += response.data.count;
        this.max = response.data.total;
        this.busy = false;
      });
    }
  }

  filter($event) {
    this.resetData();
    console.log($event.value);
    if ($event.value !== '') {
      this.titleStartsWith = $event.value;
    } else {
      this.titleStartsWith = '';
    }
    this.getComics(undefined);
  }

  resetData() {
    this.offset = 0;
    this.comics = [];
    this.max = Infinity;
  }
}
