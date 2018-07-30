import Controller from '@ember/controller';

export default Controller.extend({
	
	actions:{
		addAlbum(){
			let imgUrl = this.get('imgUrl');
			let title = this.get('title');
			let author = this.get('author');
			let price = this.get('price');
			let newAlbum = this.store.createRecord('musicBook',{imgUrl,title,author,price});
			newAlbum.save()
				// .then(() => {
  		// 			this.transitionTo('menu.library');
  		// 			alert('Added successfully');  					
				// })
				// .catch(() => {
  		// 			alert('Sorry!, An error was found');
				// });
			this.set('imgUrl','');
			this.set('title','');
			this.set('author','');
			this.set('price','');
		},
		showAuthors () {
			this.toggleProperty('isChangingAuthor');
		},
		changeAuthor (author) {
			let book = this.get('model.musicBook');
			book.set('author', author);
		}
	}
});
