import './app.styl';
import Backbone from 'backbone';

const defaults = () => ({
  name: 'anonymous' ,
  date: new Date(),
});
const validate = (input) => {
  if (input.name && typeof input.name !== 'string') {
    return 'name should be a string.';
  }
};

const User = Backbone.Model.extend({
  defaults,
  validate,
});
const user = new User();

console.log('clone:', user.toJSON());
console.log('getting only date:', user.pick('date'));

console.log('update name', user.set({ name: 'Max' }));
console.log('changed:', user.changed);

console.log('update name to number');
user.set({ name: 2 });

console.log('is user valid:', user.isValid());
if (!user.isValid()) {
  console.log('validation errors:', user.validationError);
}
