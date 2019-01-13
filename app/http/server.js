const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const piCalculatorController = require("./controller/piCalculator");

/**
 * Start the server
 */
function listen() {
  const koaApp = new Koa();
  koaApp.use(bodyParser());
  koaApp.use(piCalculatorController.routes(), piCalculatorController.allowedMethods());
  koaApp.listen(1000);
  console.log('listening on port 1000')
}

module.exports = { listen };