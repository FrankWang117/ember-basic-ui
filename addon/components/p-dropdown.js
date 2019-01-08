import Component from '@ember/component';
import layout from '../templates/components/p-dropdown';

export default Component.extend({
	layout,
	tagName: 'select',
	classNames: ['p-dropdown'],
	selectedId: null,
	init() {
		this._super(...arguments);
		this.set('#option', {});
	},
	setSelectOption() {

	},
	actions: {
		reBuildOption(optionId, option) {
			this.set(`#options.${optionId}`, option);
		}
	}
});
