import Controller from '@ember/controller';

export default Controller.extend({
	wrap: false,
	actions: {
		submit() {
			window.alert('click btn')
		}
	}
});
