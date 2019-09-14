import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    component: CharactersListComponent
  },
  {
    path: 'characters/:id',
    component: CharacterDetailsComponent
  },
  {
    path: 'comics',
    component: ComicsListComponent
  },
  {
    path: 'comics/:id',
    component: ComicDetailsComponent
  },
  {
    path: 'creators',
    component: CreatorsListComponent
  },
  {
    path: 'creators/:id',
    component: CreatorDetailsComponent
  },
  {
    path: 'events',
    component: EventsListComponent
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent
  },
  {
    path: 'series',
    component: SeriesListComponent
  },
  {
    path: 'series/:id',
    component: SeriesDetailsComponent
  },
  {
    path: 'stories',
    component: StoriesListComponent
  },
  {
    path: 'stories/:id',
    component: StoryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
