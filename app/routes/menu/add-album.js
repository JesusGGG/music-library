import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
	model(params){
		let authors = this.store.findAll('author');

		return hash ({
			authors
		});
	}
});
