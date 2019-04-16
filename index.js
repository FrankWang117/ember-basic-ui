'use strict';

module.exports = {
	name: 'ember-basic-ui',
	options: {
		nodeAssets: {
			echarts: {
				srcDir: 'dist',
				import: ['echarts.js']
			}
		}
	},
	included(app) {
		this._super.included(app);
		this.app.import('vendor/echarts/echarts.js');
		this.app.import('vendor/echarts.shim.js', {
			type: 'vendor',
			exports: { 'echarts': ['default'] }
		});
	},
	isDevelopingAddon: function () {
		return true;
	}
};