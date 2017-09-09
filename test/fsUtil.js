const mocha = require('mocha');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const fsUtil = require('./../src/fsUtil');
const sinon = require('sinon');
const assert = require('chai').assert;

chai.use(sinonChai);

mocha.describe('Filesystem utils test', () => {
  mocha.describe('writeFile tests', () => {
    mocha.it('Test write file succeessfully', () => {
      // Fs mock
      const fs = {
        writeFile: sinon.spy(),
      };

      // Types mock
      const types = {
        string: sinon.spy(),
      };

      const fsUtilInstance = fsUtil.fsUtil(fs, types);

      fsUtilInstance.writeFile('test.json', '{}');

      assert.isTrue(types.string.calledTwice);
      assert.isTrue(fs.writeFile.calledOnce);
    });
  });
});
