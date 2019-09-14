import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
