// UUID helper for custom id generation (use for new notes id)
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);