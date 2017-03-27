import Ember from 'ember';

export function betStatus(params/*, hash*/) {
  var result = (params[0] === true) ? 'Acertou' : 'Errou';
  return result;
}

export default Ember.Helper.helper(betStatus);
