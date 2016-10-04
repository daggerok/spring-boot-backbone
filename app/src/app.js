import './app.styl';

// // webpack.ProvidedPlugin makes them global:
// import $ from 'jquery';
// import _ from 'lodash';
// import curl from 'curl';
// import Backbone from 'backbone';

const
  id = 'TODO',
  username = 'TODO';

$('#app').html(`
<p>The ID is ${id}</p>
<p>The content is ${username}</p>`);
