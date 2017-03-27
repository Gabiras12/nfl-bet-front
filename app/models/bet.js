import DS from 'ember-data';

export default DS.Model.extend({
  beatingTeam: DS.belongsTo('team'),
  game: DS.belongsTo('game'),
  type: DS.attr('number'),
  user: DS.belongsTo('user'),
  points: DS.attr('number'),
  hit: DS.attr('boolean'),
  hasBeenComputed: DS.attr('boolean'),


  betType: Ember.computed('type', function() {
    if (this.get('type') === 1) {
      return 'VF';
    } else {
      return 'VD';
    }
  })
});
