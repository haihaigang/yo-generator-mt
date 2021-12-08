var path = require("path");
var Generator = require("yeoman-generator");
var { underscored, classify, dasherize } = require("underscore.string");
var inquirer = require('inquirer')
var prompts = require("./prompts");
inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    // 新建类型，页面 or 组件
    this.type = "";
    // 页面目录，eg: x、activity
    this.pageDir = "";
    // 页面名称，eg: prime
    this.pagename = "";
  }

  prompting() {
    return this.prompt(prompts).then((answers) => {
      // Set needed global vars for yo
      this.type = answers.type
      this.pageDir = answers.dir;
      this.pagename = answers.name;
    });
  }

  writing() {
    if (this.type === 'page') {
      this._writePage();
    } else {
      this._writeComponent();
    }
  }

  _writePage() {
    this.log("开始生成页面...");
    let settings = {
      templatePath: this.type,
      destinationPath: path.join(this.pageDir, underscored(this.pagename)),
      className: classify(this.pagename),
      styleName: dasherize(this.pagename),
      username: this.user.git.name(),
      createAt: new Date(),
    };

    this.log(settings);

    // if (this.fs.exists(this.destinationPath(settings.path, "index.js"))) {
    //   throw new Error(`${settings.path} 目录已存在`);
    // }

    const tempfiles = [
      "build.json",
      "index.js",
      "index.less",
      "action.js",
      "store.js",
      "images",
      "components",
    ];
    tempfiles.forEach((file) => {
      this.fs.copyTpl(
        this.templatePath(settings.templatePath, file),
        this.destinationPath(settings.destinationPath, file),
        settings
      );
    });
  }

  _writeComponent() {
    this.log("开始生成组件...");
    let settings = {
      templatePath: this.type,
      destinationPath: path.join(this.pageDir, 'components', underscored(this.pagename)),
      className: classify(this.pagename),
      styleName: dasherize(this.pagename),
      username: this.user.git.name(),
      createAt: new Date(),
    };

    this.log(settings);

    const tempfiles = [
      "index.js",
      "index.less",
      "images",
    ];
    tempfiles.forEach((file) => {
      this.fs.copyTpl(
        this.templatePath(settings.templatePath, file),
        this.destinationPath(settings.destinationPath, file),
        settings
      );
    });
  }
};
