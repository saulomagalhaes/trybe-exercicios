const throwValidationError = (message) => {
  const error = new Error(message);
  error.name = "ValidationError";
  throw error;
};

module.exports = throwValidationError;
