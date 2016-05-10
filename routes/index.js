'use strict';

let getUser = require('../libs/getUserInfo.js');
let hashids = require('../libs/hashids.js');

module.exports = function(router, conf) {
  router.get('/', function*() {
    let account = this.cookies.get('BDTOKEN');
    if (account) {
      let uid = hashids.decode(account)[0];
      let userInfo = yield getUser(uid);

      if (userInfo.is_super === 0) {
        let navmapping = userInfo.navmapping;
        let k = Object.keys((navmapping));
        let href = navmapping[k[0]]['child_menu'][0]['href'];
        this.redirect(href);
      } else {
        this.redirect('/dashboard/index');
      }
    } else {
      this.st = 60001;
    }
  });
}
