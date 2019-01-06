const KoaRouter = require('koa-router');

class TasksController extends KoaRouter {
  constructor() {
    super();
    super.get('/pi', this.piCal);
  }

  async piCal() {
      // TODO
  }
}