const mocha = require('mocha');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const sinon = require('sinon');
const assert = require('chai').assert;
const repo = require('./../src/repo');

chai.use(sinonChai);

mocha.describe('Repo Tests', () => {
  mocha.describe('Save profile of user', () => {
    mocha.it('Save successfully', () => {
      // Types mock
      const types = {
        string: sinon.spy(),
        ethAddress: sinon.spy(),
      };

      // Fs util mock
      const fsUtil = {
        writeFile: sinon.spy(),
      };

      // JSON mock
      const JSON = {
        stringify: sinon.spy(),
      };

      const repoInstance = repo.repo(types, fsUtil, JSON);

      const about = {
        pseudo: 'perastara',
        image: 'profile.png',
        ethAddress: '0x3d108D7d130201F612e619B9b8aB37D7c8EFeb62',
        description: 'Hi,',
      };

      repoInstance.setAbout(about);

      assert.isTrue(types.string.calledThrice);
      assert.isTrue(types.ethAddress.calledOnce);
      assert.isTrue(fsUtil.writeFile.calledOnce);
      assert.isTrue(fsUtil.writeFile.calledWith('about.json', JSON.stringify(about)));
    });
  });
});
