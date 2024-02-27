// in 演算子...指定されたプロパティが指定されたオブジェクトにある場合にtrueを返す
const car: CarType = { make: "Honda", model: "Accord", year: 1998 };
console.log("make" in car); // true

interface CarType {
  make?: string;
  model?: string;
  year?: number;
}

delete car.make;
if ("make" in car === false) {
  car.make = "deletedHonda";
}
console.log(car.make); // deletedHonda

// Object.entries()...引数に渡したオブジェクトからなる配列を返す。
console.log(Object.entries(car));
// [
//     [ "model", "Accord" ], [ "year", 1998 ], [ "make", "deletedHonda" ]
// ]

// Object.keys()...引数に渡したオブジェクトが持つプロパティの名前の配列を返す
console.log(Object.keys(car)); // [ "model", "year", "make" ]

// Object.values()...引数に渡したオブジェクトが持つプロパティの値を配列で返す
console.log(Object.values(car)); // [ "Accord", 1998, "deletedHonda" ]

// Object.hasOwn()...指定されたオブジェクトが指定されたプロパティを持っている場合trueを返す
console.log(Object.hasOwn(car, "make")); // true
