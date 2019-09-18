import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  events = [];
  offset = 0;
  max = Infinity;
  busy = false;
  nameStartsWith = '';

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.getEvents(undefined);
  }

  loadMore() {
    const params = {
      offset: this.offset
    };
    this.getEvents(params);
  }

  getEvents(params) {
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
      this.marvelService.getList('events', params).subscribe((response: any) => {
        console.log(response);
        this.events = this.events.concat(response.data.results);
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
    this.getEvents(undefined);
  }

  resetData() {
    this.offset = 0;
    this.events = [];
    this.max = Infinity;
  }

}
