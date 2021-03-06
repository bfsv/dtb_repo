import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private heroService: HeroService,
    private router: Router) { }
  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((data: Hero[]) => this.heroes = data,
      error => console.log(error),
      () => console.log('Get all Heroes complete'));
  }
  add(name: string): void {
    name = name.trim();
    console.log('Add Hero : ' + name)
    if (!name) { return; }
    this.heroService.create(name)
      .subscribe((data: Hero) =>
        this.heroes.push(data),
      this.selectedHero = null);
  }
  delete(hero: Hero): void {
    this.heroService
      .delete(hero._id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero._id]);
  }
}