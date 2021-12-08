var path = require("path");
var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

  }
  
  notice() {
    this.log('yo mt:swh5')
  }
};
