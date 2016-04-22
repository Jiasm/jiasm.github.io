'use strict';

function setStrTransformHump(s) {
  let str = s.replace(/_(\w)/g, function() {
    let args = arguments;
    return args[1].toUpperCase();
  });
  return str;
}

module.exports = {
  setStrTransformHump: setStrTransformHump,
}
