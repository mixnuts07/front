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
