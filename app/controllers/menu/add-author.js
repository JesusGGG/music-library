import Controller from '@ember/controller';

export default Controller.extend({
	
	actions:{
		addAuthor(){
			var firstName = this.get('firstName');
			var lastName = this.get('lastName');
			var nickname = this.get('nickname');
			var age = this.get('age');
			
			if (firstName && lastName && nickname && age){
				var newAuthor = this.store.createRecord('author',{firstName,lastName,nickname,age});
				newAuthor.save()
					.then(() => {
	  					alert('Added successfully');  		
						this.set('firstName','');
						this.set('lastName','');
						this.set('nickname','');
						this.set('age','');
	  					this.transitionTo('menu.author');
					})
					// .catch(() => {
	  		// 			alert('Sorry! An error was found');
					// 	this.transitionTo('menu.author');					
					// 	this.set('firstName','');
					// 	this.set('lastName','');
					// 	this.set('nickname','');
					// 	this.set('age','');			
					// })
					;
			} else {
				alert('Sorry! Missed data');
			}
		}
	}
});
