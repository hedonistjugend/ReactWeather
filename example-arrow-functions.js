// var names = ['kotya', 'nastya', 'antik'];
//
// names.forEach(function(name) {
//     console.log('forEach ', name);
// });
//
// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

//names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('kotyan'))

// var person = {
//     name: 'Andrew',
//     greet: function() {
//         //names.forEach(function(name) { // undefined says hi to kotya
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         });
//     }
// };
//
// person.greet();
//
// function add (a, b) {
//     return a + b;
// }

var add = (a, b) => a + b; //automaticallu gets returned

console.log(add(1, 3));
