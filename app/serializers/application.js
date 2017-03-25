import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  inflector: new Ember.Inflector(Ember.Inflector.defaultRules),

  customNormalize(payload, modelName) {
    let attributes = this.normalizedAttr(payload);
    let relationships = this.normalizedRelationship(payload)

    return {
      type: modelName,
      id: payload.id,
      attributes: attributes,
      relationships: relationships
    }
  },

  normalizeResponse(store, primaryModelClass, payload) {
    let modelName = primaryModelClass.modelName;
    let normalizedPayload = { data: [] };
    if (Array.isArray(payload)) {
      for (var i = 0; i < payload.length; i++) {
        normalizedPayload.data.push(this.customNormalize(payload[i],modelName));
      }
    } else {
      normalizedPayload.data = this.customNormalize(payload, modelName);
    }

    return normalizedPayload;
  },

  normalizedAttr(payload) {
    var attributes = {};
    for (var key in payload) {
      if (payload.hasOwnProperty(key)) {
        let property = payload[key];
        if (!Array.isArray(property) && typeof property !== 'object') {
          attributes[key] = property;
        }
      }
    }
    return attributes;
  },

  normalizedRelationship(payload) {
    var relationships = {};
    for (var key in payload) {
      if (payload.hasOwnProperty(key)) {
        let property = payload[key];

        if (Array.isArray(property) && property.length > 0) {
          var currentRelationship = [];

          property.forEach((item) => {
            let normalizedKey = this.get('inflector').singularize(key);
            item['type'] = normalizedKey;
            currentRelationship.push(item);
          });

          relationships[key] = {
            data: currentRelationship
          };
        }

        if (!Array.isArray(property) && typeof property === 'object') {

          var currentRelationship = {
            id: property.id,
            type: key
          }

          if (this.isPolyphomicRelationship(key)) {
            currentRelationship.type = 'team'
          }

          relationships[key] = {
            data: currentRelationship
          };
        }
      }
    }

    return relationships;
  },

  isPolyphomicRelationship(key) {
    let normalizedKey = key.toLowerCase();
    return (normalizedKey === 'hometeam' || normalizedKey === 'visitingteam' || normalizedKey === 'winner' || normalizedKey === 'beatingteam');
  }
});
