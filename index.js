const ssbFunctions = require('./src/ssb-functions');
const Tab = require('./src/tab');


ssbFunctions.onReady(() => {
  console.log('is ready!');

  const tab = getTab();
  // ssbFunctions.publish(tab.toPrettyString(), (err, msg) => {
  //   if (!err) {
  //     console.log('msg: ', msg);
  //   } else {
  //     console.error(err);
  //   }
  // })
  ssbFunctions.search(null, (err, res) => {
    console.log(res);
  })
});

ssbFunctions.onError(console.error);

ssbFunctions.start();


function getTab() {
  const tab = new Tab({
    song: 'A song name',
    author: 'A Author Name',
    tab: 'A tab well formatted',
    capo: '3',
  });

  return tab;
}