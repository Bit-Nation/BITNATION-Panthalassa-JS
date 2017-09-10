const types = require('stronglyt');

types.ethAddress = (ethAddress) => {
  if (ethAddress.length !== 42 || typeof ethAddress !== 'string') {
    throw new Error(`Expected ETHAddress got: ${ethAddress}`);
  }

  return ethAddress;
};

module.exports = types;
