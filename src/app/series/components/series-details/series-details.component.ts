import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.scss']
})
export class SeriesDetailsComponent implements OnInit {

  series: any;
  id = '';

  constructor(private marvelService: MarvelService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');

      this.marvelService.getItem('series', this.id).subscribe((response: any) => {
        console.log(response);
        this.series = response.data.results[0];
      });
    });
  }

}
