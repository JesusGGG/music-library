import Controller from '@ember/controller';

export default Controller.extend({
	
	actions:{
		addAlbum(){
			var imgUrl = this.get('imgUrl');
			var title = this.get('title');
			var author = this.get('author');
			var price = this.get('price');
			if (imgUrl && title && author && price){
				var newAlbum = this.store.createRecord('musicBook',{imgUrl,title,author,price});
				newAlbum.save()
					.then(() => {
	  					alert('Added successfully');  					
	  					this.transitionTo('menu.library');
						this.set('imgUrl','');
						this.set('title','');
						this.set('author','');
						this.set('price','');
					})
					.catch(() => {
	  					alert('Sorry! An error was found');
						this.transitionTo('menu.library');
						this.set('imgUrl','');
						this.set('title','');
						this.set('author','');
						this.set('price','');						
					});
			} else {
				alert('Sorry! Missed data');
			}
		},
		showAuthors () {
			this.toggleProperty('isChangingAuthor');
		},
		changeAuthor (author) {
			var book = this.get('model.musicBook');
			book.set('author', author);
		}
	}
});
