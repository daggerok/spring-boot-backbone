import './app.styl';
import Backbone from 'backbone';
/*
const Users = Backbone.Collection.extend({
  url: '/api/users',
  parse: function parse(data) {
    console.log(data);
    return data;
  }
});
console.log(new Users());
*/
const User = Backbone.Model.extend({
  initialize: function initialize(attributes, options) {
    console.log('initilization attributes and options:', attributes, options);
  }
});
const user = new User({ id: '...' });
console.log('id:', user.get('id'));

const OtherUser = Backbone.Model.extend({
  constructor: (attributes, options) => {
    console.log('constructor of:', attributes, options);
  }
});
const other = new OtherUser({ id: 'ololo' });
console.log('ither id:', other.id);
