import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-creators-list',
  templateUrl: './creators-list.component.html',
  styleUrls: ['./creators-list.component.scss']
})
export class CreatorsListComponent implements OnInit {
  
  creators: any;

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.marvelService.getList('creators', {}).subscribe((response: any) => {
      console.log(response);
      this.creators = response.data.results;
    });
  }

}
