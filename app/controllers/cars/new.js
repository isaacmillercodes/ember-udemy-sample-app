import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCar: function() {
      var self = this;
      var newCar = this.store.createRecord('car', {
        make: this.get('carMake'),
        model: this.get('carModel'),
        year: this.get('carYear')
      });

      newCar.save();
      self.transitionToRoute('cars');
    }
  }
});
