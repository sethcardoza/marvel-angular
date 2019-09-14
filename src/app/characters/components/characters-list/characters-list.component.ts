import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../../services/marvel.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})

export class CharactersListComponent implements OnInit {

  characters: any;

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.marvelService.getList('characters', {}).subscribe((response: any) => {
      console.log(response);
      this.characters = response.data.results;
    });
  }

}
