// function getTempCallback (location, callback) {
//     callback(undefined, 78);
//     callback('City Not Found');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });
//
//
function getTempPromise (location) {
    return new Promise(function (resolve, reject) {
            resolve(79); //если всё ок =temp
            reject("city not found"); //если ошибка =err
    });
}


getTempPromise().then(function (temp) {
    console.log('promise success', temp);
}, function (err) {
    console.log('promise error', err);
});



// function addPromise (a, b) {
//     return new Promise(function (resolve, reject) {
//         if (typeof a === 'number' && b === 'number') {
//                 resolve(a+b);
//         } else {
//                 reject("Some of the variables is not a number");
//         }
//     });
// }
//
// addPromise(2, 't').then(function (sum) {
//     console.log("Summ is = ", sum);
// }, function (err) {
//      console.log('promise error', err);
// });
