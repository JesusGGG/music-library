import DS from 'ember-data';

export default DS.Model.extend({
	saleId: DS.belongsTo('number'),
	musicBookId: DS.hasMany('number'),
	quantity: DS.attr('number')
});
