const ssbClient = require('ssb-client');
const ssbKeys = require('ssb-keys');
const ssbFeed = require('ssb-feed');
const mfr = require('map-filter-reduce');
const pull = require('pull-stream');
const EventEmitter = require('events');

class EventBus extends EventEmitter {}

// generate a new user on each run
const user = ssbKeys.generate();

const eventBus = new EventBus();
let sbot = null;
let feed = null;
let ready = false;

/**
 * 
 * @param {function} done Function that are called when the ssb-client are ready
 */
function onReady(done) {
  ready = true;
  eventBus.on('ready', done);
}

/**
 * 
 * @param {function} done Function that are called when a error occur
 */
function onError(done) {
  eventBus.on('error', done);
}

/**
 * A function that start the 
 */
function start() {
  ssbClient((err, ssbServer) => {
    if (!err && ssbServer) {
      feed = ssbFeed(ssbServer, user);
      sbot = ssbServer;
      eventBus.emit('ready');
    } else {
      eventBus.emit('error', err);
    }
  });
}

function publish(data, cb) {
  if (ready) {
    sbot.publish({
      type: 'post',
      text: data,
      channel: 'ssb-chords'
    }, cb);
  } else {
    eventBus.emit('error', 'The Scuttlebot client is not ready yet.');
    cb('The Scuttlebot client is not ready yet.', null);
  }
}

function search(query, cb) {
  if (ready) {
    pull(
      sbot.query.read({
        query: [
          // {$filter: {
          //   value: { content: { channel: 'test-ssb-chords' } }
          // }},
          {$filter: query}
        ]
      }),
      pull.collect((err, ary) => {
        if (!err) {
          console.log(ary);
          cb(null, ary);
        } else {
          console.error(err);
          cb(err, null);
        }
      })
    );
  } else {
    eventBus.emit('error', 'The Scuttlebot client is not ready yet.');
    cb('The Scuttlebot client is not ready yet.', null);
  }
}

module.exports = {
  onReady,
  onError,
  start,
  publish,
  search
}