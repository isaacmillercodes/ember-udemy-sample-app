import Ember from 'ember';

export default Ember.Component.extend({
  name: 'Isaac',
  greetingSet: false,
  actions: {
    greetUser: function(name) {
      alert('Hey what\'s up hello ' + name);
      this.setProperties({
        greetingSet: true
      });
    }
  },
  classNames: ['well'],
  classNameBindings: ['greetingSet']
});
