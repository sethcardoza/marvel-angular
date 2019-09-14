import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

@NgModule({
  declarations: [CharacterDetailsComponent, CharactersListComponent],
  imports: [
    CommonModule
  ]
})
export class CharactersModule { }
