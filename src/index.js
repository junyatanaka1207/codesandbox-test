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

//-----------------配列-----------------
// const val5 = ["dog","cat"];
// val5[0] = "bird"; //上書き変更可能
// val5.push("monkey"); //追加可能
// console.log(val5);

/**
 * テンプレート文字列
 *
 */

// const name = "junya";
// const age = 22;

// //従来
// const message1 = "私の名前は、" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を仕様
// const message2 = `My name is ${name} . Age is ${age}.`;
// console.log(message2);

//-----------------アロー関数-----------------

//従来の関数➀
// function func1(str){
//   return str;
// }
// //従来の関数➁
// const func2 = function(str){
//   return str;
// }

// console.log(func1("hello world"));
// console.log(func2("hello world2"));

//アロー関数
//処理が一行の時、波かっこ省略できる　=> str;　でOK
//引数が1つの時、カッコ省略可能

// const func3 = (str) =>{
//   return str;
// }
// console.log(func3("this is arrow"));

// const add = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(add(4, 9));

//-----------------分割代入-----------------

// const myProfile = {
//   name: "junya",
//   age: 22
// };

// const message1 = `My name is ${myProfile.name}. Age is ${myProfile.age}years old`;
// console.log(message1);

// //分割代入(オブジェクト)
// const { name, age } = myProfile;
// const message2 = `My name is ${name}. Age is ${age}years old`;
// console.log(message2);

// const myProfile = ["junya", 22];

// const message3 = `My name is ${myProfile[0]}.Age is ${myProfile[1]}years old.`;
// console.log(message3);

// //分割代入（配列）
// const [name, age] = myProfile;
// const message4 = `My name is ${name}.Age is ${age} years old.`;
// console.log(message4);

//-----------------デフォルト値、引数-----------------
// const sayHello = (name = "guests") => console.log(`こんにちは！${name}さん!`);
// sayHello("junya");
// sayHello();

//-----------------スプレッド構文-----------------
//配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1); //中身を展開して表示
// const sumFunc =(num1,num2) =>console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる（展開の逆）
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);
