import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicDetailsComponent } from './components/comic-details/comic-details.component';
import { ComicsListComponent } from './components/comics-list/comics-list.component';

@NgModule({
  declarations: [ComicDetailsComponent, ComicsListComponent],
  imports: [
    CommonModule
  ]
})
export class ComicsModule { }
