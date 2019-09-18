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
  max = Infinity;
  busy = false;
  titleStartsWith = '';

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.getSeries(undefined);
  }

  loadMore() {
    const params = {
      offset: this.offset
    };
    this.getSeries(params);
  }

  getSeries(params) {
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
      this.marvelService.getList('series', params).subscribe((response: any) => {
        console.log(response);
        this.series = this.series.concat(response.data.results);
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
    this.getSeries(undefined);
  }

  resetData() {
    this.offset = 0;
    this.series = [];
    this.max = Infinity;
  }

}
