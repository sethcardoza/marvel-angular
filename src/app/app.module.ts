import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersListComponent } from './modules/characters/components/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './modules/characters/components/character-details/character-details.component';
import { ComicsListComponent } from './modules/comics/components/comics-list/comics-list.component';
import { ComicDetailsComponent } from './modules/comics/components/comic-details/comic-details.component';
import { CreatorsListComponent } from './modules/creators/components/creators-list/creators-list.component';
import { CreatorDetailsComponent } from './modules/creators/components/creator-details/creator-details.component';
import { EventsListComponent } from './modules/events/components/events-list/events-list.component';
import { EventDetailsComponent } from './modules/events/components/event-details/event-details.component';
import { SeriesListComponent } from './modules/series/components/series-list/series-list.component';
import { SeriesDetailsComponent } from './modules/series/components/series-details/series-details.component';
import { StoriesListComponent } from './modules/stories/components/stories-list/stories-list.component';
import { StoryDetailsComponent } from './modules/stories/components/story-details/story-details.component';

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
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
