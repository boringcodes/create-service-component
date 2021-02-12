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
        name: 'compName',
        message: 'Name of the new component (singular)?',
        default: 'thing',
      },
    ];

    return this.prompt(prompts).then((props) => {
      const compNameParamCase = changeCase.paramCase(props.compName);
      const compNamePascalCase = changeCase.pascalCase(props.compName);

      this.props = {
        ...props,
        compNameParamCase,
        compNamePascalCase,
        compNameParamCasePlural: pluralize(compNameParamCase),
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
