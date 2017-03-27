import DS from 'ember-data';

export default DS.Model.extend({
  betLimitDate: DS.attr('date'),
  endDate: DS.attr('date'),
  startDate: DS.attr('date'),
  championship: DS.belongsTo('championship'),
  games: DS.hasMany('game'),
  roundHasBeenFineshed: DS.attr('boolean')
});
