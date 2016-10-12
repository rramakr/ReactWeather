//Gets Locations and returns weather
function sumPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('values should be of type number');
    }
  });
};

sumPromise(10).then(function (value) {
  console.log('The Sum is::', value);
}, function (err) {
  console.log('ERROR!!!', err);
});
