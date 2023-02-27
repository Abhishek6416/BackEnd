function validator(data) {
    if (data.name && data.category && data.price && data.quantity) {
      return true;
    }
    return false;
  }
  module.exports = validator;
  