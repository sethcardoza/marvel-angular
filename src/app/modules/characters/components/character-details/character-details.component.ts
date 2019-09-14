import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  character: any;
  id = '';

  constructor(private marvelService: MarvelService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');

      this.marvelService.getItem('characters', this.id).subscribe((response: any) => {
        console.log(response);
        this.character = response.data.results[0];
      });
    });
  }

}
