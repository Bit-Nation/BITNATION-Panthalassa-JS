module.exports = (t, fsUtil, JSON, ipfsNode) => {
  function setAbout(about) {
    // Validate about object
    t.string(about.pseudo);
    t.string(about.image);
    t.ethAddress(about.ethAddress);
    t.string(about.description);

    // Save about content
    fsUtil.writeFile('about.json', JSON.stringify(about));
  }

  /**
   * Returns peer id of ipfs node
   */
  function whoAmI() {
    t.promise(ipfsNode);
    return ipfsNode
      .then((ipfsApi) => {
        t.promise(ipfsApi.node.id());
      })
      .catch((err) => {
        throw err;
      });
  }

  return {
    setAbout,
    whoAmI,
  };
};
