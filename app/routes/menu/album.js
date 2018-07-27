import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';


export default Route.extend({
	shoppingCart: service(),

	model(params){

		let musicBook = this.store.findRecord('musicBook',params.id);
		let authors = this.store.findAll('author');

		return hash ({
			musicBook,
			authors
		});
	},

	actions:{
		updateAlbum(album){
			album.save()
				.then(() => {
  					this.transitionTo('menu.library');
  					alert('Updated successfully');  					
				})
				.catch(() => {
  					alert('Sorry!, An error was found');
				});
		},
		deleteAlbum(model){
			model.destroyRecord()
				.then(() => {
  					this.transitionTo('menu.library');
  					alert('Deleted successfully');  					
				})
				.catch(() => {
  					alert('Sorry!, An error was found');
				});
		},
		willTransition(){
			let album = this.get('controller.model');
			album.rollbackAttributes();
		},
		addToCart(model){
			this.get('shoppingCart').get('musicBooks').pushObject(model);
			alert('You have added "' + model.title + '" to your cart');
			this.transitionTo('menu.library');
		}
	}
});