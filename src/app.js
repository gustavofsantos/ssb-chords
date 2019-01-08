const ssbFunctions = require('./ssb-functions');
const Tab = require = require('./tab');

class App {
  constructor() {
    this.ready = false;
    this._registerHandlers();
    this._start();
  }

  _registerHandlers() {
    ssbFunctions.onReady(() => {
      this.ready = false;
    });

    ssbFunctions.onError(console.error);
  }

  _start() {
    ssbFunctions.search();
  }

  /**
   * Publish a new tab
   * @param {object} param0 
   * @param {function} cb Callback that are called when the message was published (err, msg) => {}
   */
  newTab({song, author, tab}, cb) {
    const newTab = new Tab({ song, author, tab });

    ssbFunctions.publish(newTab.toPrettyString(), cb);
  }

  searchTab(query) {

  }
}

module.exports = App;