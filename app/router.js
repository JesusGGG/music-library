import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('library',{path: '/'});
  this.route('album', {path: 'album/:id'});
  this.route('author');
  this.route('authorData', {path: 'authorData/:id'});
  this.route('shopping-cart');
});

export default Router;
