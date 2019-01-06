const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const piCalculatorController = require("./controller/piCalculator");

/**
 * Start the server
 */
function listen() {
  const koaApp = new Koa();
  koaApp.use(piCalculatorController.routes(), piCalculatorController.allowedMethods());
  koaApp.listen(80);
}

module.exports = { listen };