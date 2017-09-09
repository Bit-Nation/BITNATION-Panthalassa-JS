/**
 * File system utils. You should create an instance using the "fsUtilsFactory"
 */

const nodeFs = require('fs');
const types = require('./types');

/**
 * File system utils
 * @param fs FileSystem
 * @param t Types
 * @returns {{writeFile: writeFile}}
 */
function fsUtil(fs, t) {
  function writeFile(fileName, content) {
    // Validate params
    t.string(fileName);
    t.string(content);

    // Write content to given file
    fs.writeFile(fileName, content, (err) => {
      if (err) {
        throw err;
      }
    });
  }

  return {
    writeFile,
  };
}

// Main fsUtils
module.exports.fsUtil = fsUtil;

// fsUtils Factory
module.exports.fsUtilFactory = () => fsUtil(nodeFs, types);
