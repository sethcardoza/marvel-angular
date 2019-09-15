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
      this.marvelService.getList('stories', params).subscribe((response: any) => {
        console.log(response);
        this.stories = this.stories.concat(response.data.results);
        this.offset += response.data.count;
        this.busy = false;
      });
    }
  }

}
