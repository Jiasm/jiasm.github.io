'use strict';


module.exports = function*(bdName, sqlStr) {
  return yield bdName.query(sqlStr).then(function(result) {
      return result[0];
    });
}
