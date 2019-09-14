import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {

  series: any;

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.marvelService.getList('series', {}).subscribe((response: any) => {
      console.log(response);
      this.series = response.data.results;
    });
  }

}
