import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesListComponent } from './components/stories-list/stories-list.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';



@NgModule({
  declarations: [StoriesListComponent, StoryDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class StoriesModule { }
