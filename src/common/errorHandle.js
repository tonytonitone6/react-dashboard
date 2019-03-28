export default class ErrorHandle {
  constructor(message) {
    this.message = message;
  }

  toMessage() {
    return this;
  }
}