const { performance } = require('perf_hooks');

class Message {
  constructor () {
    this.message = 'MESSAGE';
    this.length = this.message.length;
    this.index = 0;
    this.timeout = 2000;
    this.lastCalled = null;
  }

  getLetter () {
    if (!this._isDataAvailable()) {
      return null
    }
    const letter = this.message[this.index];
    this._increaseIndex();
    this.lastCalled = performance.now();
    return letter;
  }

  _isDataAvailable () {
    return this.lastCalled + this.timeout < performance.now();
  }
  
  _increaseIndex () {
    this.index = this.index >= this.message.length - 1 ? 0 : this.index + 1;
  }
}

module.exports = new Message()
