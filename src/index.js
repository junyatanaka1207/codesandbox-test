/**
 * const let等の変数宣言
 */

//--------var-----------------
// var val1 = "var変数";
// console.log(val1);

// //varは上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "val1を再宣言";
// console.log(val1);

//--------let-----------------
// let val2 = "let変数";
// console.log(val2);

// //let変数は上書き可能
// val2 = "val2上書き";
// console.log(val2);

// //letは再宣言できない
// let val2 = "fafafasdf";

//--------const-----------------
// const val3 = "conat1変数";
// console.log(val3);

//conat変数は上書き不可能
// val2 = "val2上書き";

// ///letは再宣言できない
// const val3 = "fafafasdf";

//オブジェクト作成　基本constを使う
// //オブジェクトの中身はconst変数でも変更できてしまう　追加や削除もできる
// const val4 = {
//   name: "junyua",
//   age: 22,
// };
// val4.name = "tanaka"; //変更
// val4.adress = "shizuoka"; //追加
// console.log(val4);
