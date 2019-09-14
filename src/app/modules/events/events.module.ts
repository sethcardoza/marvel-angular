import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';



@NgModule({
  declarations: [EventsListComponent, EventDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class EventsModule { }
