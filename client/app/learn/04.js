import './app.styl';
import Backbone from 'backbone';
import $ from 'jquery';

const User = Backbone.Model.extend({ urlRoot: '/api/users', });
const user = new User({ username: 'Ololo' });

console.log('before save', user.toJSON());
console.log('new', user.isNew());

const app = $('#app');
// http :8080/api/users/search/rmLike\?username=o
user.save()
    .then((data) => {
      console.log('user saved', data);
      app.html(`
        <pre>${JSON.stringify(data, null, 1)}</pre>
      `);
    });
