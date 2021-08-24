const double = arr => arr.map(val => val * 2);

// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square % 2 === 0)

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }