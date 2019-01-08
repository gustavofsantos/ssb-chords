
/**
 * ## Tab
 * A tab has the following information
 *  - Song name                                 {string}
 *  - Author                                    {string}
 *  - Tab                                       {string}
 *  - Key (optional)                            {string}
 *  - Capo (Optional, default is with no capo); {string}
 *  - Tunning (optional, default is             {[string]}
 *    the array [E, A ... e])
 */
class Tab {
  /**
   * Constructor
   * @param {string, string, string, string, string, [string]#6}
   */
  constructor({ song, author, tab, key, capo, tunning }) {
    this.tab = {
      song,
      author,
      tab,
      key,
      capo,
      tunning: tunning || ['E', 'A', 'D', 'G', 'B', 'e'],
      creation: Date.now()
    }

    this.hash = null;
  }

  /**
   * Set a key to the tab if hasn't
   * @param {string} key A key of the tab
   * @returns {bool} true if could change and false if not
   */
  setKey(key) {
    if (!this.tab.key) {
      this.tab.key = key;
      return true;
    }

    return false;
  }

  /**
   * Set the capo position if hasn't
   * @param {string} capo A capo position in the fret board
   * @returns {bool} true if could change and false if not
   */
  setCapo(capo) {
    if (!this.tab.capo) {
      this.tab.capo = capo;
      return true;
    }

    return false;
  }

  /**
   * 
   * @param {[string]} tunning 
   */
  setTunning(tunning) {
    if (!this.tab.tunning && tunning.length === 6) {

    }
  }

  toPrettyJSON() {
    return JSON.stringify(this.tab, null, 2);
  }

  toString() {
    return JSON.stringify(this.tab);
  }

  toPrettyString() {
    return `
Title: ${this.tab.song}
Author: ${this.tab.author}
Tunning: ${this.tab.tunning.reduce((tunning, tune) => tunning + ' ' + tune)}
Capo: ${this.tab.capo}
Created: ${(new Date(this.tab.creation)).toString()}

---

${this.tab.tab}
    `
  }
}

module.exports = Tab;