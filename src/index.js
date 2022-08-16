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
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2; //分割代入
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー　結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

//-----------------map flterを使った配列の処理-----------------
//const nameArr = ["junya", "tanaka", "jake"];

// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) =>{
//   return name;
// })
// console.log(nameArr2);

//nameArr.map((name) => console.log(name));

//nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) =>{
//   return num % 2 === 0;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=>{
//   if (name === "jake"){
//     return name
//   }else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

//-----------------3項演算子-----------------
// ある条件？trueの処理:falseの処理
// const val1 = 1 < 0 ? "it's treu" :"it's false";
// console.log(val1);

// const num = 986598;
// //console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString():'数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "over 100" : "no problem";
// };
// console.log(checkSum(50, 40));

//-----------------論理演算子の本当の意味を知る-----------------
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2){
//   console.log("one or two is true");
// }
// if (flag1 && flag2){
//   console.log("one and two is true");
// }

// ||は左側がfalseなら右を返す　trueならそのまま左を返す
// const num = null ;
// const fee = num || "no setteing";
// console.log(fee);

// &&は左側がtrueなら右を返す　trueならそのまま左を返す

// const num2 = 100;
// const fee2 = num2 && "setteings are ok";
// console.log(fee2);
