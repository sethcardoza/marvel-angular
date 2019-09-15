import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {

  series = [];
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
      this.marvelService.getList('series', params).subscribe((response: any) => {
        console.log(response);
        this.series = this.series.concat(response.data.results);
        this.offset += response.data.count;
        this.busy = false;
      });
    }
  }

}
