const types = require('stronglyt');

types.ethAddress = (ethAddress) => {
  if (ethAddress.length !== 42 || typeof ethAddress !== 'string') {
    throw new Error(`Expected ETHAddress got: ${ethAddress}`);
  }

  return ethAddress;
};

types.promise = (promise) => {
  if (promise.constructor !== Promise) {
    throw new Error('Expected promise');
  }

  return promise;
};

module.exports = types;
