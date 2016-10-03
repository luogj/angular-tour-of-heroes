import { Component, OnInit } 	from '@angular/core';
import { Router } 				from '@angular/router';

import { Hero } 				from './hero';

import { HeroService }			from './hero.service';


@Component({
	moduleId:		module.id,
    selector:		'my-heroes',
    templateUrl:	'heroes.component.html',
	styleUrls: 		[ 'heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
	selectedHero: Hero;
	heroes: Hero[];

	constructor(
		private router: 		Router,
		private heroService: 	HeroService
	) {}

	getHeroes(): void {
		this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}
	
	ngOnInit(): void {
		this.getHeroes();
	}

	onSelect(hero: Hero): void {	
		this.selectedHero = hero;
	}
	
	goToDetail(): void {
		let link = ['/detail', this.selectedHero.id];
		this.router.navigate(link);
	}
}