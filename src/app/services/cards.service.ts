import { Injectable } from '@angular/core';

@Injectable()
export class CardsService {
	getFruit = async name => {
		const fruits = {
			pineapple: '🍍',
			peach: '🍑',
			strawberry: '🍓'
		};
		const animals = {
			koala: {
				flip: false,
				name: 'koala',
				src: `assets/svg/name.svg`,
				matched: false
			},
			lion: {
				flip: false,
				name: 'lion',
				src: `assets/svg/name.svg`,
				matched: false
			},
			panda: {
				flip: false,
				name: 'panda',
				src: `assets/svg/name.svg`,
				matched: false
			},
			dog: {
				flip: false,
				name: 'dog',
				src: `assets/svg/name.svg`,
				matched: false
			},
			tiger: {
				flip: false,
				name: 'tiger',
				src: `assets/svg/name.svg`,
				matched: false
			},
			gorilla: {
				flip: false,
				name: 'gorilla',
				src: `assets/svg/name.svg`,
				matched: false
			}
		};
		return animals[name];
	};
}
