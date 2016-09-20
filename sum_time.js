// Instapaper: count # of items and the total read time
// For single page only

function main() {
  const CLASS_NAME = 'meta_item meta_read_time';
  const RE = /(\d+) min/

  const elemList = document.getElementsByClassName(CLASS_NAME);
  console.log('total items: ' + elemList.length);

  const elemArray = Array.prototype.slice.call(elemList, 0);
  const timeArray = elemArray.map(x => Number.parseInt(x.textContent.match(RE)[1]));
  const sumTime = timeArray.reduce((pre, cur) => pre + cur, 0)
  console.log('total time: ' + sumTime);
}

main();
