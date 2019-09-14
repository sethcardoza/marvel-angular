import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  events: any;

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.marvelService.getList('events', {}).subscribe((response: any) => {
      console.log(response);
      this.events = response.data.results;
    });
  }

}
