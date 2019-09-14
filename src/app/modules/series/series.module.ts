import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';



@NgModule({
  declarations: [SeriesListComponent, SeriesDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class SeriesModule { }
