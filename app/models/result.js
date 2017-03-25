import DS from 'ember-data';

export default DS.Model.extend({
  points: DS.attr('number'),
  right: DS.attr('boolean')
  hasBeenComputed: DS.attr('boolean'),
  bet: DS.belongsTo('bet')
});
