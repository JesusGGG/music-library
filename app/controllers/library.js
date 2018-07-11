import Controller from '@ember/controller';

export default Controller.extend({
	
	actions:{
		addAlbum(){
			let imgUrl = this.get('imgUrl');
			let title = this.get('title');
			let author = this.get('author');
			let price = this.get('price');
			let newAlbum = this.store.createRecord('music-book',{imgUrl,title,author,price});
			newAlbum.save();
			this.set('imgUrl','');
			this.set('title','');
			this.set('author','');
			this.set('price','');
		}
	}
});
