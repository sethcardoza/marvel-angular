import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creator-details',
  templateUrl: './creator-details.component.html',
  styleUrls: ['./creator-details.component.scss']
})
export class CreatorDetailsComponent implements OnInit {

  creator: any;
  id = '';

  constructor(private marvelService: MarvelService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');

      this.marvelService.getItem('creators', this.id).subscribe((response: any) => {
        console.log(response);
        this.creator = response.data.results[0];
      });
    });
  }

}
