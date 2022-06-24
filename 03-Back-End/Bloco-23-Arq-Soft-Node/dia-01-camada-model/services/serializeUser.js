const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    lastName: authorData.last_name,
    email: authorData.email,
  };
};

module.exports = serialize;
