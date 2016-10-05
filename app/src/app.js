import './app.styl';

// // webpack.ProvidedPlugin makes them global:
// import $ from 'jquery';
// import _ from 'lodash';
// import curl from 'curl';
// import Backbone from 'backbone';

const
  id = '-1',
  username = `stopped. will not implement any backbone, because of poor framework these days...`;

$('#app').html(`
<p>The ID is ${id}</p>
<p>The content is ${username}</p>`);
