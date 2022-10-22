const loader = require("./server/loaders");
const startup = async () => {
  await loader();
};

startup();
