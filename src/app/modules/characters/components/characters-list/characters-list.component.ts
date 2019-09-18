import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})

export class CharactersListComponent implements OnInit {

  characters = [];
  offset = 0;
  max = Infinity;
  busy = false;
  nameStartsWith = '';

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.getCharacters(undefined);
  }

  loadMore() {
    const params = {
      offset: this.offset
    };
    this.getCharacters(params);
  }

  getCharacters(params) {
    if (!params) {
      params = {
        offset: this.offset
      };
    }
    if (!this.busy && this.offset < this.max) {
      if (this.nameStartsWith) {
        params.nameStartsWith = this.nameStartsWith;
      }
      this.busy = true;
      this.marvelService.getList('characters', params).subscribe((response: any) => {
        console.log(response);
        this.characters = this.characters.concat(response.data.results);
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
      this.nameStartsWith = $event.value;
    } else {
      this.nameStartsWith = '';
    }
    this.getCharacters(undefined);
  }

  resetData() {
    this.offset = 0;
    this.characters = [];
    this.max = Infinity;
  }
}
