import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
	imgUrl: DS.attr('string'),
	title: DS.attr('string'),
	author:  DS.belongsTo('author'),
	price: DS.attr('number'),
	soldBook: DS.hasMany('soldBook'),
});
