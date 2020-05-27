function CanolaError(message) {
  Error.call(this, message);
  this.message = message;
}

CanolaError.prototype = Object.create(Error.prototype);
CanolaError.prototype.constructor = CanolaError;

export default CanolaError;
