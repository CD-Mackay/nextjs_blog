const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "ConnorTwo",
        mongodb_password: "ConnorPass",
        mongodb_cluster: "authcluster",
        mongobd_database: "contact-messages",
      },
    };
  }
};
