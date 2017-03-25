import DS from 'ember-data';

export default DS.Model.extend({
  championshipNumber: DS.attr('number'),
  championshipYear: DS.attr('number'),
  teams: DS.hasMany('team'),
  rounds: DS.hasMany('round')
});
