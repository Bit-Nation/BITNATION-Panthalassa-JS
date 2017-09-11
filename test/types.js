const mocha = require('mocha');
const types = require('../src/types');
const expect = require('chai').expect;
const assert = require('chai').assert;

mocha.describe('Test Types', () => {
  mocha.describe('Test EthAddress', () => {
    mocha.it('Successfully pass EthAddress back', () => {
      expect(types.ethAddress('0x3d108D7d130201F612e619B9b8aB37D7c8EFeb62')).to.equal('0x3d108D7d130201F612e619B9b8aB37D7c8EFeb62');
    });

    mocha.it('Throw Error when there is a non EthAddress value given', () => {
      assert.throws(() => types.ethAddress('0x3d108D7d132e619B9b8aB37D7c8EFeb62'), Error, 'Expected ETHAddress got: 0x3d108D7d132e619B9b8aB37D7c8EFeb62');
    });
  });

  mocha.describe('Test Promise', () => {
    mocha.it('Successfully pass back promise', () => {
      const p = new Promise(((fulfill, reject) => {
        fulfill(true);
        reject(false);
      }));

      expect(types.promise(p)).to.equal(p);
    });

    mocha.it('Throw Error when given value is not a Promise', () => {
      assert.throws(() => types.promise(new Array([])), Error, 'Expected promise');
    });
  });
});
