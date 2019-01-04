import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/p-button';

export default Component.extend({
	layout,
	tagName: 'button',
	content: 'default',
	classNames: ['p-btn'],
	classNameBindings: ['block:btn-block', 'type', 'reverse'],
	attributeBindings: ['disabled'],

	/**
	 * Property to block level buttons
	 * @property block
	 * @type boolean
	 * @default false
	 * @public
	 */
	block: false,
	defaultText: null,
	text: computed('defaultText', function () {
		return this.get('defaultText');
	}),
	/**
	 * bubble?
	 * @property bubble
	 * @type boolean
	 * @default false
	 * @public
	 */
	bubble: false,
	/**
	 * Property to disable the button
	 * @property disabled
	 * @type boolean
	 * @default false
	 * @public
	 */
	disabled: false,

	/**
	 * Property to show button icon
	 * @property icon
	 * @type string
	 * @default ''
	 * @public
	 */
	icon: '',

	/**
	 * When clicking the button this action is called with the value of the button (that is the value of the "value" property).
	 *
	 * @event onClick
	 * @param {*} value
	 * @public
	 */
	onClick() { },

	/**
	 * Property to reverse button style for the background color to dark
	 * @property reverse
	 * @type boolean
	 * @default false
	 * @public
	 */
	reverse: false,

	/**
	 * Property to show type of button
	 * @property type
	 * @type string
	 * @default 'default'
	 * @public
	 */
	type: 'default',
	/**
	 * @method click
	 * @private
	 */
	click() {
		let action = this.get('onClick');
		// let preventConcurrency = this.get('preventConcurrency');

		action();


		// if (!preventConcurrency || !this.get('isPending')) {
		//   let promise = (action)(this.get('value'));
		//   if (promise && typeof promise.then === 'function' && !this.get('isDestroyed')) {
		// 	this.set('state', 'pending');
		// 	promise.then(() => {
		// 	  if (!this.get('isDestroyed')) {
		// 		this.set('state', 'fulfilled');
		// 	  }
		// 	}, () => {
		// 	  if (!this.get('isDestroyed')) {
		// 		this.set('state', 'rejected');
		// 	  }
		// 	}
		// 	);
		//   }
		// }
		// if (true) {
		// 	let promise = (action)(this.get('value'));
		// 	if (promise && typeof promise.then === 'function' && !this.get('isDestroyed')) {
		// 		this.set('state', 'pending');
		// 		promise.then(() => {
		// 			if (!this.get('isDestroyed')) {
		// 				this.set('state', 'fulfilled');
		// 			}
		// 		}, () => {
		// 			if (!this.get('isDestroyed')) {
		// 				this.set('state', 'rejected');
		// 			}
		// 		}
		// 		);
		// 	}
		// }
		return this.get('bubble');
	}
});
