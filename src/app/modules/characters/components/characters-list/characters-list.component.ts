import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})

export class CharactersListComponent implements OnInit {

  characters = [];
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
      this.marvelService.getList('characters', params).subscribe((response: any) => {
        console.log(response);
        this.characters = this.characters.concat(response.data.results);
        this.offset += response.data.count;
        this.busy = false;
      });
    }
  }
}
