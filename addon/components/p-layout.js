import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/p-layout';

export default Component.extend({
	layout,
	rowBasic: computed('direction', function () {
		return this.get('direction') === 'row';
	}),
	colBasic: computed('direction', function () {
		return this.get('direction') === 'col';
	}),
	mainAxis: computed('direction', 'main', function () {
		let direction = this.get('direction'),
			justify = this.get('main');

		if (direction !== 'row') {
			switch (justify) {
			case 'start':
				return 'col-js';
			case 'end':
				return 'col-je';
			case 'center':
				return 'col-jc';
			case 'between':
				return 'col-jb';
			case 'around':
				return 'col-ja';
			default:
				break;
			}
		} else {
			switch (justify) {
			case 'start':
				return 'rowJS';
			case 'end':
				return 'rowJE';
			case 'center':
				return 'rowJC';
			case 'between':
				return 'rowJB';
			case 'around':
				return 'rowJA';
			default:
				break;
			}
		}
	}),
	crossAxis: computed('direction', 'cross', function () {
		let direction = this.get('direction'),
			aliginItems = this.get('cross');

		if (direction !== 'row') {
			switch (aliginItems) {
			case 'start':
				return 'col-cs';
			case 'end':
				return 'col-ce';
			case 'center':
				return 'col-cc';
			case 'stretch':
				return 'col-ct';
			case 'baseline':
				return 'col-cb';
			default:
				break;
			}
		} else {
			switch (aliginItems) {
			case 'start':
				return 'row-cs';
			case 'end':
				return 'row-ce';
			case 'center':
				return 'row-cc';
			case 'stretch':
				return 'row-ct';
			case 'baseline':
				return 'row-cb';
			default:
				break;
			}
		}
	}),
	// eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
	localClassNameBindings: [
		'rowBasic:flex-rb',
		'mainAxis',
		'crossAxis',
		'colBasic:flex-cb'
	]
}).reopenClass({
	positionalParams: ['direction', 'main', 'cross', 'multi']
});

