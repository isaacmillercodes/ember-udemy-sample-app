import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteCar: function(id) {
      // var self = this;

      this.store.findRecord('car', id).then(car => {
        car.destroyRecord();
        // car.save();
        // self.transitionToRoute('cars');
      });
    }
  }
});
