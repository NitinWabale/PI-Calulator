const KoaRouter = require('koa-router');
const createLogger = require('logging');  
const logger = createLogger.default('PIController');
const GeneralError = require('../../core/errors/generalError');
const srcFile = __filename;

class PIController extends KoaRouter {
  constructor() {
    super();
    super.get('/pi', this.piCal);
  }

  /**
   * Returns pi value and logs all iterations of pi, using formula using Gregory-Leibniz formula
   * @param {*} context 
   */
  async piCal(context) {
        Object.assign(context, { srcFile, operationName: 'PIController.get' });
        logger.info(context);
        let iterations = 2000; // hardcoded for now
        let denominator = 1;
        let multiplier = 1;
        let pi = (4 / denominator);
      try {
        for(let i = 2; i <= iterations; i++)
        {
            pi += ( (4 / (denominator += 2)) * (multiplier *= -1) );
            logger.info(`Pi value : ${pi}`);
        }
        Object.assign(context.response, {
          body: {value: pi},
          status: 200,
        });
      } catch (error) {
        if (error instanceof GeneralError) {
          context.throw(500, error);
        } else {
          throw error;
        }
      }

  }
}

// expose as singleton
module.exports = new PIController();