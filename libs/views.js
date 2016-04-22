'use strict';

let views = require('co-views');
let render = views(process.cwd() + '/views', {
  default: 'html',
  map: {
    html: 'handlebars'
  }
});
module.exports = render;
