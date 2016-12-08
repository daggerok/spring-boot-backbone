import './app.styl';
import Backbone from 'backbone';

const defaults = () => ({
  username: 'anonymous' ,
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

console.log('before save', user.toJSON());
console.log('new', user.isNew());

user.save().done(() => {
  console.log('after save', user.toJSON());
  console.log('new', user.isNew());

  const res = user.destroy();
  console.log('rm', res);
});
