const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const pluralize = require('pluralize');

const pkg = require('../../package.json');

module.exports = class extends Generator {
  async prompting() {
    this.log(yosay(`Welcome to the ${chalk.red(pkg.name)} generator!`));

    const prompts = [
      {
        type: 'input',
        name: 'elementComponentName',
        message: 'Name of the new component (singular)?',
        default: 'thing',
      },
    ];

    return this.prompt(prompts).then(props => {
      this.props = {
        ...props,
        elementComponentPluralName: pluralize(props.elementComponentName),
      };
    });
  }

  writing() {
    this.fs.copyTpl(
      [this.templatePath('**/*'), this.templatePath('**/.*')],
      this.destinationPath('src/components'),
      this.props,
    );
  }
};
