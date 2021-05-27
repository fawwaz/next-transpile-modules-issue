const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@project/web-ui"]);

module.exports = withPlugins([withTM]);
