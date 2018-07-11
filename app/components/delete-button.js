import Component from '@ember/component';

export default Component.extend({
	author: null,
	onDeleteAuthor () {
		//Do nothing
	},
	actions: {
		deleteAuthor (author) {
			var confirm = confirm('Are you sure');
			if (confirm){
				this.onDeleteAuthor(author)
				.then(() => {
					alert('Successfully');
				})
				.catch(() =>{
					alert('An error was found');
				});
			}
		}
	}
});