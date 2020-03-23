const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const changeCase = require('change-case');
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
      const elementComponentNameParamCase = changeCase.paramCase(
        props.elementComponentName,
      );
      const elementComponentNameCamelCase = changeCase.camelCase(
        props.elementComponentName,
      );

      this.props = {
        ...props,
        elementResourceName: elementComponentNameParamCase,
        elementResourceNamePlural: pluralize(elementComponentNameParamCase),
        elementDirName: pluralize(elementComponentNameCamelCase),
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
