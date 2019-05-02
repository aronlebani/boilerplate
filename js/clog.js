const util = require('util');
const chalk = require('chalk');

module.exports.blog = (str, d=null) => console.log(chalk.blue(util.inspect(str, {depth: d})));
module.exports.rlog = (str, d=null) => console.log(chalk.red(util.inspect(str, {depth: d})));
