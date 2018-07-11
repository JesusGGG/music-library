import Route from '@ember/routing/route';

export default Route.extend({
	model(params){
		return this.store.findRecord('author',params.id);
	},
	actions:{
		updateAuthor(author){
			author.save()
				.then(() => {
  					this.transitionTo('author');
  					alert('Updated successfully');  					
				})
				.catch(() => {
  					alert('Sorry!, An error was found');
				});
		},
		deleteAuthor(model){
			var confirmDelete = confirm('Are you sure?');
			if (confirmDelete){
				model.destroyRecord()
				.then(() => {
  					this.transitionTo('author');
  					alert('Deleted successfully');  					
				})
				.catch(() => {
  					alert('Sorry!, An error was found');
				});
			}
			
		},
		willTransition(){
			let author = this.get('controller.model');
			author.rollbackAttributes();
		}
	}
});