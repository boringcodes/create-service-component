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
      const compNameCamelCase = changeCase.camelCase(props.compName);

      this.props = {
        // param-case
        compNameParamCase,
        // param-cases
        compNameParamCasePlural: pluralize(compNameParamCase),
        // PascalCase
        compNamePascalCase,
        // PasCalCases
        compNamePascalCasePlural: pluralize(compNamePascalCase),
        // camelCase
        compNameCamelCase,
        // camelCases
        compNameCamelCasePlural: pluralize(compNameCamelCase),
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
