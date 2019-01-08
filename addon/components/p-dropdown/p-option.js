import Component from '@ember/component';
import layout from '../../templates/components/p-dropdown/p-option';
import { computed } from '@ember/object';

export default Component.extend({
	layout,
	tagName: 'option',
	attributeBindings: ['selected'],
	selected: computed('selectedId', function () {
		return this.get('selectedId') === this.elementId;
	}),
	didInsertElement() {
		this._super(...arguments);
		const action = this.get('reBuild');

		action(this.elementId, this.get('value'));
	}
});
