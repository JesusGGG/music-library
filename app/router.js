import EmberRouter from '@ember/routing/router';
import config from './config/environment';


const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('library');
  // this.route('album', {path: 'album/:id'});
  // this.route('author');
  // this.route('authorData', {path: 'authorData/:id'});
  // this.route('shopping-cart');
  // this.route('sold-book');
  // this.route('sale');
  this.route('menu',{path: '/'}, function() {
    this.route('library');
    this.route('author');
    this.route('shopping-cart');
    this.route('album', {path: 'menu/album/:id'});
    this.route('author-data', {path: 'menu/author-data/:id'});
    this.route('sale');
    this.route('sold-book');
    this.route('add-album');
    this.route('add-author');
  });
});

export default Router;
