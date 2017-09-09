const types = require('./types');

function repo(t, fsUtil, JSON) {
  function setAbout(about) {
    // Validate about object
    t.string(about.pseudo);
    t.string(about.image);
    t.ethAddress(about.ethAddress);
    t.string(about.description);

    // Save about content
    fsUtil.writeFile('about.json', JSON.stringify(about));
  }

  return {
    setAbout,
  };
}


module.exports.repo = repo;
module.exports.repoFactory = fsUtil => repo(types, fsUtil, JSON);
