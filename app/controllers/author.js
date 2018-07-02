import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		addAuthor(){
			let firstName = this.get('firstName');
			let lastName = this.get('lastName');
			let nickName = this.get('nickName');
			let age = this.get('age');
			let newAuthor = this.store.createRecord('author',{firstName,lastName,nickName,age});
			newAuthor.save();
			this.set('firstName','');
			this.set('lastName','');
			this.set('nickName','');
			this.set('age','');
		}
	}
});
