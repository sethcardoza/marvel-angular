import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersListComponent } from './characters/components/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './characters/components/character-details/character-details.component';
import { ComicsListComponent } from './comics/components/comics-list/comics-list.component';
import { ComicDetailsComponent } from './comics/components/comic-details/comic-details.component';
import { CreatorsListComponent } from './creators/components/creators-list/creators-list.component';
import { CreatorDetailsComponent } from './creators/components/creator-details/creator-details.component';
import { EventsListComponent } from './events/components/events-list/events-list.component';
import { EventDetailsComponent } from './events/components/event-details/event-details.component';
import { SeriesListComponent } from './series/components/series-list/series-list.component';
import { SeriesDetailsComponent } from './series/components/series-details/series-details.component';
import { StoriesListComponent } from './stories/components/stories-list/stories-list.component';
import { StoryDetailsComponent } from './stories/components/story-details/story-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterDetailsComponent,
    ComicsListComponent,
    ComicDetailsComponent,
    CreatorsListComponent,
    CreatorDetailsComponent,
    EventsListComponent,
    EventDetailsComponent,
    SeriesListComponent,
    SeriesDetailsComponent,
    StoriesListComponent,
    StoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
