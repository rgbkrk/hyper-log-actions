exports.middleware = (store) => (next) => (action) => {
  try {
    console.log(action);
  } catch(e) {
    console.error(e);
  }
  next(action);
};

