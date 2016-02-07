'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', _.map(require('../app/src/models/user'),prop=>{
    if(prop.type){
      prop = _.extend({},prop);
      prop.type = DataTypes[prop.type];
    } else {
      prop = DataTypes[prop];
    }
    return prop;
  }), {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
