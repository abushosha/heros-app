import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heros } from 'src/app/core/constants/heros';
import { Hero } from 'src/app/core/models/hero.model';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent implements OnInit {

  Heros = Heros;
  hero: Hero;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(param => {
      console.log(param['id']);
      this.findHero(+param['id']);
    })
   }

  ngOnInit(): void {}

  findHero(id: number) {
    this.hero = this.Heros.find((hero) => hero.id === id);
    console.log(this.hero)
  }

}
