import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.scss']
})
export class StoriesListComponent implements OnInit {

  stories = [];
  offset = 0;
  max = Infinity;
  busy = false;

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.getStories(undefined);
  }

  loadMore() {
    const params = {
      offset: this.offset
    };
    this.getStories(params);
  }

  getStories(params) {
    if (!params) {
      params = {
        offset: this.offset
      };
    }
    if (!this.busy && this.offset < this.max) {
      this.busy = true;
      this.marvelService.getList('stories', params).subscribe((response: any) => {
        console.log(response);
        this.stories = this.stories.concat(response.data.results);
        this.offset += response.data.count;
        this.max = response.data.total;
        this.busy = false;
      });
    }
  }

  resetData() {
    this.offset = 0;
    this.stories = [];
    this.max = Infinity;
  }

}
