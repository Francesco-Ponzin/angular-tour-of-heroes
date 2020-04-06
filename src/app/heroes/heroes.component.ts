import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes: Hero[];

  onSelect(hero: Hero): void {
    if (this.heroService.selectedHero === hero) {
      this.deSelect();
    } else {
      this.heroService.selectedHero = hero;

    }
  }

  deSelect(): void {
    this.heroService.selectedHero = undefined;
  }


  constructor(public heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
