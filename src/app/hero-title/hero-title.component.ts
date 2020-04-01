import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-title',
  templateUrl: './hero-title.component.html',
  styleUrls: ['./hero-title.component.css']
})
export class HeroTitleComponent implements OnInit {

  @Input() hero: Hero;

  title = 'Tour of Heroes';



  constructor() { }

  ngOnInit(): void {
  }

}
