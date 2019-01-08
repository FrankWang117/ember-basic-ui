import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('p-button');
  this.route('p-layout');
  this.route('p-button-group');
  this.route('p-dropdown');
});

export default Router;
