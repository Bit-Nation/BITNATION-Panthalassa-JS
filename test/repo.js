const mocha = require('mocha');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const sinon = require('sinon');
const assert = require('chai').assert;
const repo = require('./../src/repo');
const types = require('./../src/types');

chai.use(sinonChai);

mocha.describe('Repo Tests', () => {
  mocha.describe('Save profile of user', () => {
    mocha.it('Save successfully', () => {
      // Types mock
      const t = {
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

      const repoInstance = repo(t, fsUtil, JSON);

      const about = {
        pseudo: 'perastara',
        image: 'profile.png',
        ethAddress: '0x3d108D7d130201F612e619B9b8aB37D7c8EFeb62',
        description: 'Hi,',
      };

      repoInstance.setAbout(about);

      assert.isTrue(t.string.calledThrice);
      assert.isTrue(t.ethAddress.calledOnce);
      assert.isTrue(fsUtil.writeFile.calledOnce);
      assert.isTrue(fsUtil.writeFile.calledWith('about.json', JSON.stringify(about)));
    });
  });
  mocha.describe('Who am i', () => {
    mocha.it('Fetch metadata about peer', () => {
      // Promise mock
      const expectedPromise = new Promise(((fulfill, reject) => {
        fulfill('success');
        reject(new Error('error'));
      }));


        // Ipfs Api mock
      const ipfsApi = {
        node: {
          id() {
            return expectedPromise;
          },
        },
      };

      // Ipfs node mock
      const ipfsNode = new Promise(((fulfill, reject) => {
        fulfill(ipfsApi);
        reject(new Error('error'));
      }));

      // Repo
      const repoInstance = repo(types, {}, {}, ipfsNode);

      // Assertions
      assert.isTrue(repoInstance.whoAmI().constructor === Promise);
    });
  });
});
