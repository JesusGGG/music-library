import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	shoppingCart: service(),
	model(){
		return this.store.findAll('music-book');
	},
	actions:{
		addToCart(model){
			this.get('shoppingCart').get('musicBooks').pushObject(model);
		}
	}
});
