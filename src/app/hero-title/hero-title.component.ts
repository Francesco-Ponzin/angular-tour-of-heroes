import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-title',
  templateUrl: './hero-title.component.html',
  styleUrls: ['./hero-title.component.css']
})
export class HeroTitleComponent implements OnInit {


  title = 'Tour of Heroes';



  constructor(public heroService: HeroService) { }

  ngOnInit(): void {
  }

}
