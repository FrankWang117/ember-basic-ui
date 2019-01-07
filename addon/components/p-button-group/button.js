import Button from 'ember-basic-ui/components/p-button';
import { computed } from '@ember/object';

export default Button.extend({
	/**
	 * @property groupValue
	 * @private
	 */
	groupValue: null,
	/**
	 * @property buttonGroupType
	 * @type string
	 * @private
	 */
	buttonGroupType: false,
	/**
	 * @property active
	 * @type boolean
	 * @readonly
	 * @private
	 */
	active: computed('buttonGroupType', 'groupValue.[]', 'value', function () {
		let { value, groupValue } = this.getProperties('value', 'groupValue');

		if (this.get('buttonGroupType') === 'radio') {
			return value === groupValue;
		}
		return false;
	}).readOnly()
});