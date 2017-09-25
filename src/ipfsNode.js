/**
 * Responsible for returning a promise, containing an object of helper methods.
 * @param Ipfs
 * @param types
 */
module.exports = (Ipfs, types) => {
  // Ipfs node
  const iNode = new Ipfs();

  // Promise
  const p = new Promise(((fulfill, reject) => {
    // Reject promise on error
    iNode.on('error', (err) => {
      reject(err);
    });

    // fulfill promise when ready
    iNode.on('ready', () => {
      fulfill({
        node: iNode,
      });
    });
  }));

  return types.promise(p);
};
