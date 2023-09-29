//! 3 - dars | Functions | YouTube Link
// 	— default types.
// 	— don't use any any time!
// 	— void vs undefined vs never
// 	— Callback function
// 	— Call signature
// 	— constructor signature
// 	— Generics  as a function
// 	— Limitations

//!void => function hech narsaga return qilmaydigan holda undefined qaytarish uchun

//!never =>

//!unknown => nomalum

//!Function expppression

// function getData(a: number, b: number): number | void {
//   return a + b;
// }

// console.log(getData(5, 5));

//!callback function

// type call = number; => clreate type

// function get(a: number): call {
//   return a;
// }

// type callProp = {
//   //!=> callback funtion uchun type yaratish;
//   (a: number): number,
// };

// function getData(key: string): callProp {
//   return (a: number) => a;
// }
