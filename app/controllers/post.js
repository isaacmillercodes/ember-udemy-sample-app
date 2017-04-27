import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sayHello: function() {
      alert('Hello!');
    },
    toggleBody: function() {
      this.toggleProperty('isShowingBody');
    },
    submitAction: function() {
      alert(this.get('name'));
      alert(this.get('comment'));
    }
  },
  title: 'My Blog Post',
  body: 'This is the body of my blog post',
  authors: ['Isaac', 'Danny', 'Roberto'],
  created: new Date(),
  comments: [
    {
      name: 'Tall Paul',
      comment: 'I like this blog'
    },
    {
      name: 'Bad Brad',
      comment: 'I hate this blog'
    },
    {
      name: 'Pistol Pete',
      comment: 'I\'m not in this class'
    }
  ]
});
