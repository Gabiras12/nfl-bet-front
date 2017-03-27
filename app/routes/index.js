import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      game: this.store.findAll('game'),
      champ: this.store.findRecord('championship', 1)
    };
  },

  actions: {
    bet(team, betType, game) {
      let type = (betType === 'VF') ? 1 : 2;
      var bet = this.store.createRecord('bet', {
        beatingTeam: team,
        game: game,
        type: type,
      });

      bet.save().then(() => {
        alert('Aposta realizada com Sucesso!');
      })
    }
  }
});
