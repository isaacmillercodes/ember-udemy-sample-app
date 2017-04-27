import Ember from 'ember';

// var cars = [
//   {
//     "id": 1,
//     "make": 'Honda',
//     "model": 'Accord',
//     "year": '2001'
//   },
//   {
//     "id": 2,
//     "make": 'Toyota',
//     "model": 'Camry',
//     "year": '2011'
//   },
//   {
//     "id": 3,
//     "make": 'Ford',
//     "model": 'Explorer',
//     "year": '2015'
//   }
// ];

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('cars.json').then(data => {
      return data;
    });
  }
});
