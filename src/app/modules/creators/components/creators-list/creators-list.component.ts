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
      this.marvelService.getList('creators', params).subscribe((response: any) => {
        console.log(response);
        this.creators = this.creators.concat(response.data.results);
        this.offset += response.data.count;
        this.busy = false;
      });
    }
  }

}
