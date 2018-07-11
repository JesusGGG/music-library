import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	shoppingCart: service(),

	model(params){
		return this.store.findRecord('music-book',params.id);
	},
	
	actions:{
		updateAlbum(album){
			album.save()
				.then(() => {
  					this.transitionTo('library');
  					alert('Updated successfully');  					
				})
				.catch(() => {
  					alert('Sorry!, An error was found');
				});
		},
		deleteAlbum(model){
			model.destroyRecord()
				.then(() => {
  					this.transitionTo('library');
  					alert('Deleted successfully');  					
				})
				.catch(() => {
  					alert('Sorry!, An error was found');
				});
		},
		willTransition(){
			let album = this.get('controller.model');
			album.rollbackAttributes();
		}
	}
});
