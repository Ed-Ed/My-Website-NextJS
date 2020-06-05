const next = require("next");

const app = next({
  dev: false,
  conf: { distDir: "./dist" },
});
const handle = app.getRequestHandler();

exports.app = (req, res) => {
  return app.prepare().then(() => handle(req, res));
};
