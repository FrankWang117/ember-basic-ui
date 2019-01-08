import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
	init() {
		this._super(...arguments);
		this.set('options', A([
			{ id: 'a', value: 'a' },
			{ id: 'b', value: 'b' },
			{ id: 'c', value: 'c' },
		]))
	},
	actions: {
		optionChange(value) {
			console.log('--')
			console.log(value)

		}
	}
});
