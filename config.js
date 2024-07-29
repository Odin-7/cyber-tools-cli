module.exports = {
  npmUrl: 'https://registry.npmjs.org/cyber-tools-cli',
  promptTypeList: [{
    type: 'list',
    message: 'Select Your Template:',
    name: 'type',
    choices: [
      {
        name: 'template-1', //模板名称，显示选择
        value: {
          url: 'https://github.com/Odin-7/cyber-notes',
          gitName: 'cyber-notes',
          val: 'cyber-Notes'
        }
      },
      {
        name: 'template-2',
        value: {
          url: 'https://github.com/Odin-7/fast-gpt',
          gitName: 'fast-gpt',
          val: 'fast-gpt'
        }
      }
    ]
  }],
};
