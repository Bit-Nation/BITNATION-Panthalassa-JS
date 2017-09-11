const mocha = require('mocha');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const sinon = require('sinon');
const assert = require('chai').assert;
const ipfsNode = require('./../src/ipfsNode');
const ipfs = require('ipfs');

chai.use(sinonChai);
chai.use(require('chai-as-promised'));

mocha.describe('Ipfs Node tests', () => {
  mocha.describe('Node instance', () => {
    mocha.it('Call types.promise on return', () => {
      // Types mock
      const types = {
        promise: sinon.spy(),
      };

      ipfsNode(ipfs, types);

      assert.isTrue(types.promise.calledOnce);
    });
  });
});
