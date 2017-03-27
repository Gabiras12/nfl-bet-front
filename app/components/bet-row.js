import Ember from 'ember';

export default Ember.Component.extend({
  betType: ['VD', 'VF'],
  selectedType: 'VD',

  actions: {
    bet(team) {
      this.set('betingTeam', team);
    },

    sendBet() {
      this.sendAction('bet', this.get('betingTeam'), this.get('selectedType'), this.get('game'));
      this.$('.collapse').collapse('hide');
    }

  }
});
