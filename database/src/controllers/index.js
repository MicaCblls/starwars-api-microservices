const { catchedAsync } = require("../utils");

module.exports = {
  modelListController: catchedAsync(require("./modelListController")),
  modelIdController: catchedAsync(require("./modelIdController")),
};
