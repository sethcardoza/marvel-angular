import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.scss']
})
export class ComicDetailsComponent implements OnInit {

  comic: any;
  id = '';

  constructor(private marvelService: MarvelService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');

      this.marvelService.getItem('comics', this.id).subscribe((response: any) => {
        console.log(response);
        this.comic = response.data.results[0];
      });
    });
  }

}
