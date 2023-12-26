import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  selectedHero?: Hero;
  heroes = HEROES;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
