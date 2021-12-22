const replayList = require("../serverReplays.json");

const randomServerResponse = () => {
  const randomPick = Math.floor(Math.random() * replayList.length);
  return replayList[randomPick];
};

module.exports = randomServerResponse;
