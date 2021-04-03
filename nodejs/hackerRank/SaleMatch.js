//  https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen
n = 7;
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let sortedArray = ar.sort((a, b) => a - b);
  let objCounter = [...Array.from(new Set(ar))];
  let objitems = {};
  let count = 0;
  objCounter.forEach((item) => {
    objitems[item] = 0;
  });
  sortedArray.forEach((items) => {
    objitems[items] = objitems[items] + 1;
  });

  for (var itemcount in objitems) {
    count += Math.floor(objitems[itemcount] / 2);
  }
  return count;
}
console.log(sockMerchant(n, ar));
