import DS from 'ember-data';

export default DS.Model.extend({
  homeTeam: DS.belongsTo('team'),
  visitingTeam: DS.belongsTo('team'),
  winner: DS.belongsTo('team'),
  matchDate: DS.attr('date'),
  round: DS.belongsTo('round'),
  scoreDiference: DS.attr('number'),
  stadium: DS.attr('string'),
  bets: DS.hasMany('bet')
});
