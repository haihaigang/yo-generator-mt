'use strict';

module.exports = [
  {
    type: 'list',
    name: 'type',
    message: '请选择要创建的类型？',
    choices: [{
      name: '页面',
      value: 'page'
    }, {
      name: '组件',
      value: 'component'
    }],
    default: 'page'
  },
  {
    when: (answers) => {
      return (answers.type === 'page')
    },
    type: 'list',
    name: 'dir',
    message: '请选择将要生成页面所在的目录？',
    choices: [{
      name: '活动页目录(activity)',
      value: 'activity/'
    }, {
      name: '多端复用目录(x)',
      value: 'x/'
    }, {
      name: '默认目录(./)',
      value: './'
    }],
    default: 'activity/'
  },
  {
    when: (answers) => {
      return (answers.type === 'page')
    },
    type: 'input',
    name: 'name',
    message: '请输入将要生成页面的名称：',
    validate: value => {
      if (!value) {
        return '至少输入一个啊'
      }
      if (!/^[A-z]+.*/.test(value)) {
        return '必须以字母开头'
      }
      return true
    }
  },
  {
    when: (answers) => {
      return (answers.type === 'component')
    },
    type: 'fuzzypath',
    name: 'dir',
    message: '请输入将要生成组件的目录：',
    // excludePath: nodePath => nodePath.startsWith('node_modules'),
    // excludeFilter: nodePath => nodePath == '.',
    // itemType: 'any',
    // suggestOnly: true,
    // depthLimit: 10,
    // validate: value => {
    //   if (!value) {
    //     return '至少输入一个啊'
    //   }
    //   if (!/^[A-z]+.*/.test(value)) {
    //     return '必须以字母开头'
    //   }
    //   return true
    // }
  },
  {
    when: (answers) => {
      return (answers.type === 'component')
    },
    type: 'input',
    name: 'name',
    message: '请输入将要生成组件的名称：',
    validate: value => {
      if (!value) {
        return '至少输入一个啊'
      }
      if (!/^[A-z]+.*/.test(value)) {
        return '必须以字母开头'
      }
      return true
    }
  },
];