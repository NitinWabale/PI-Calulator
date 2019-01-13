const sinon = require('sinon');
const server = require('../../../../app/http/server');
const request = require('supertest').agent(server.listen(81));
require('sinon-as-promised');
require('should');
const objectUnderTest = require('../../../../app/http/controller/piCalculator');
const GeneralError = require('../../../../app/core/errors/generalError');

describe('PiCalculator', () => {
  const testSandbox = sinon.sandbox.create();
  let dummyContext = {}; 
  beforeEach(() => {
    dummyContext = {
      response: {
        body: { value: 3.14566 },
        status: 200,
      }
    };
  });

  afterEach(() => {
    testSandbox.restore();
  });

  describe('#get()', () => {
    it('should Get pi value', async () => {
      const result = await objectUnderTest.piCal(dummyContext);
      result.should.not.equal(null);
    });

    it('should return 200', done => {

      testSandbox.stub(objectUnderTest, 'piCal').returns(dummyContext);

      request.get('/pi')
        .set('Authorization', 'bearer x')
        .expect(200, done);
    });
  });
});