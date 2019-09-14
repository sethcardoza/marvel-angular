import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorsListComponent } from './components/creators-list/creators-list.component';
import { CreatorDetailsComponent } from './components/creator-details/creator-details.component';

@NgModule({
  declarations: [CreatorsListComponent, CreatorDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class CreatorsModule { }
