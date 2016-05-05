const pm = require('shipit-pm');
const deploy = require('shipit-deploy');
const cnpm = require('shipit-cnpm');

module.exports = function(shipit) {
  deploy(shipit);
  cnpm(shipit);
  pm(shipit);
  shipit.initConfig({
    default: {
      workspace: '/tmp/deploy/Data_Platform',
      deployTo: '/home/work/Data_Platform',
      repositoryUrl: 'https://git.oschina.net/darrencode/Data_Platform.git',
      ignores: ['.git'],
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true,
      cnpm: {
        flags: '--production'
      },
      pm: {
        production: '/home/work/Data_Platform/current/pm2/production.json',
      }
    },
    production: {
      servers: ['work@10.10.127.33']
    }
  });
};
