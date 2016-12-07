import './app.styl';
import Backbone from 'backbone';

const defaults = () => ({
  username: 'anonymous' ,
  date: new Date(),
});
const validate = (input) => {
  if (input.username && typeof input.username !== 'string') {
    return 'username should be a string.';
  }
};

const User = Backbone.Model.extend({
  urlRoot: '/api/users',
  defaults,
  validate,
});
const user = new User({ username: 'Ololo' });

console.log(user.save());
console.log(user);
console.log(user.destroy());

