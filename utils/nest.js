const nest = async (p) => {
  try {
    if (Array.isArray(p)) {
      const result = await Promise.all(p);
      return [null, result];
    } else {
      const result = await p;
      return [null, result];
    }
  } catch (err) {
    return [err, null];
  }
};

module.exports = nest;
