import { Component, OnInit, OnDestroy } from '@angular/core';

export interface Card {
	flip: boolean;
	name: string;
	src: string;
	matched: boolean;
}

@Component({
	selector: 'memory-card',
	templateUrl: 'memory-card.component.html',
	styleUrls: ['./memory-card.component.scss']
})
export class MemoryCardComponent implements OnInit, OnDestroy {
	cards: Card[] = [];
	lockboard = false;
	cardsNumber;

	constructor() {
		let initialCards: Card[] = [
			{
				flip: false,
				name: 'koala',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'lion',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'panda',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'dog',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'tiger',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'gorilla',
				src: `assets/svg/name.svg`,
				matched: false
			}
		];

		let farmAnimals: Card[] = [
			{
				flip: false,
				name: 'pig',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'ox',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'cow',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'horse',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'goat',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'chicken',
				src: `assets/svg/name.svg`,
				matched: false
			}
		];

		let forestAnimals: Card[] = [
			{
				flip: false,
				name: 'deer',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'bear',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'fox',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'chipmunk',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'wolf',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'boar',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'hedgehog',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'owl',
				src: `assets/svg/name.svg`,
				matched: false
			}
		];

		let savannahAnimals: Card[] = [
			{
				flip: false,
				name: 'lion',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'elephant',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'camel',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'giraffe',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'buffalo',
				src: `assets/svg/name.svg`,
				matched: false
			},
			{
				flip: false,
				name: 'zebra',
				src: `assets/svg/name.svg`,
				matched: false
			}
		];
		this.shuffle(forestAnimals);
	}

	ngOnInit() {
		var body = document.getElementsByTagName('body')[0];
		body.classList.add('about-us');
	}

	shuffle(cards: Card[]) {
		cards.forEach(c => (c.src = c.src.replace('name', c.name)));
		let dups = JSON.parse(JSON.stringify(cards));
		this.cards = [...cards, ...dups];
		this.cards.sort(() => Math.random() - 0.5);
	}

	flipCard(card) {
		if (this.lockboard || card.matched) return;
		if (this.flippedForMatch().length == 2) return;
		card.flip = true;
		if (this.flippedForMatch().length == 2) {
			this.lockboard = true;
			this.matchCards();
		}
	}

	flippedForMatch() {
		return this.cards.filter(c => c.flip && !c.matched);
	}

	setMatch(c1, c2) {
		this.cards.forEach(c => {
			if (Object.is(c, c1) || Object.is(c, c2)) {
				c.matched = true;
			}
		});
	}

	matchCards() {
		let [c1, c2] = this.flippedForMatch();
		let isMatch = c1.name == c2.name;
		isMatch ? this.setMatch(c1, c2) : this.unflipCards();
		this.lockboard = false;
	}

	unflipCards() {
		setTimeout(() => {
			this.cards.map(c => (!c.matched ? (c.flip = false) : null));
		}, 1000);
	}

	restartGame() {
		3;
		this.cards.forEach(c => {
			c.matched = false;
			c.flip = false;
		});
		this.cards.sort(() => Math.random() - 0.5);
	}

	switchCards(name) {
		// switch name:
	}

	ngOnDestroy() {
		var body = document.getElementsByTagName('body')[0];
		body.classList.remove('about-us');
	}
}
