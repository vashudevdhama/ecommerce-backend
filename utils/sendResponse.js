const sendResponse = (res, err, data) => {
  if (err) {
    return res.json({ data: null, error: err.message });
  }
  return res.json({
    data: data,
    error: null,
  });
};

module.exports = sendResponse;
