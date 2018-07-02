import DS from 'ember-data';

export default DS.Model.extend({
	imgUrl: DS.attr('string'),
	title: DS.attr('string'),
	author: DS.attr('string'),
	price: DS.attr('number')
});