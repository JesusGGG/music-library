import DS from 'ember-data';
import { computed } from '@ember/object';
//import { observer } from '@ember/object';

export default DS.Model.extend({
	musicBook: DS.hasMany('musicBook'),
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	nickname: DS.attr('string'),
	age: DS.attr('number'),
	fullName: computed('firstName', 'lastName', function() {
    	return `${this.get('firstName')} ${this.get('lastName')}`;
  	}),

	//fullNameChanged: observer('firstName','lastName', function() {
    //	console.log(`fullName changed to: ${this.get('fullName')}`);
  	//})
});