import './app.styl';

// // webpack.ProvidedPlugin makes them global:
// import $ from 'jquery';
// import _ from 'lodash';
// import curl from 'curl';
// import Backbone from 'backbone';

const
  id = '-1',
  username = `I will not implement any backbone, because of useless, but project is demonstrates nice gradle dynamic task creation approach (see gradle/app.gradle file)`;

$('#app').html(`
<p>The ID is ${id}</p>
<p>The content is ${username}</p>`);
