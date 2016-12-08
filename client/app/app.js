import './app.styl';
import Backbone from 'backbone';
import $ from 'jquery';

const User = Backbone.Model.extend({ urlRoot: '/api/users', });
const Users = Backbone.Collection.extend({
  model: User,
  url: '/api/users',
});
const users = new Users();
const user1 = users.add({ username: '1' });
const user2 = users.create({ username: '2' });

const ul = $('div#app').html('<ul></ul>');

users.fetch().then(resp => {
  ul.html(resp._embedded.users.map(user => {
    const { id, username } = user;
    console.log(id, username);
    return `<li>user id: ${id}, name: ${username}</li>`;
  }));
});

/*
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
*/
