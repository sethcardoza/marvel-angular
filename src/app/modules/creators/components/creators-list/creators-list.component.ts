import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-creators-list',
  templateUrl: './creators-list.component.html',
  styleUrls: ['./creators-list.component.scss']
})
export class CreatorsListComponent implements OnInit {

  creators = [];
  offset = 0;
  max = Infinity;
  busy = false;
  nameStartsWith = '';

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.getCreators(undefined);
  }

  loadMore() {
    const params = {
      offset: this.offset
    };
    this.getCreators(params);
  }

  getCreators(params) {
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
      this.marvelService.getList('creators', params).subscribe((response: any) => {
        console.log(response);
        this.creators = this.creators.concat(response.data.results);
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
    this.getCreators(undefined);
  }

  resetData() {
    this.offset = 0;
    this.creators = [];
    this.max = Infinity;
  }

}
