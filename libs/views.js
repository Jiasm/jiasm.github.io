var views = require('co-views');
var render = views(process.cwd() + '/views', {
  default: 'html',
  map: {
    html: 'handlebars'
  }
});
module.exports = render;
