class MyClass {
    // クラスからインスタンスを作成する際にインスタンスに関する状態の初期化を行うメソッド。
    // インスタンス化時に呼び出される。
    constructor() {
    }
}
const myClass = new MyClass()
const myClass2 = new MyClass()
console.log(myClass instanceof MyClass) // true
console.log(myClass === myClass2) // false

class Point {
    // フィールド,クラスフィールド？？
    private x: number;
    private y: number;
    // constructor内のthisは新しく作るインスタンスオブジェクトになる。
    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
        console.log(this) // Point { x: 3, y: 4 }
    }
}
const point = new Point(3,4)
console.log(point) // Point { x: 3, y: 4 }

class Counter {
    private count: number;
    constructor(count: number) {
        this.count = count
    }
    // プロトタイプメソッド...各インスタンス間で共有されるメソッド。なので別のインスタンスでもこのメソッドの参照先は同じになる。
    increment() {
        return this.count++
    }
}
const counter = new Counter(10)
console.log(counter.increment) // [Function: increment]
console.log(counter.increment()) // 10

class NumberWrapper {
    // 外から参照されたくない場合、_からプロパティ名が始まったりする
    private _value: string;
    constructor(_value: string) {
        this._value = _value
    }
    // アクセッサプロパティ...プロパティのように振る舞うメソッド
    // get...プロパティへの参照
    get value() {
        console.log("GETTER")
        return this._value
    }
    // set...プロパティへの代入
    set value(newValue: string) {
        console.log("SETTER")
        this._value = newValue
    }
}
const numberWrapper = new NumberWrapper("Initial value")
console.log(numberWrapper.value) // Initial value
numberWrapper.value = "Second value"
console.log(numberWrapper.value) // Second value

class ClassField {
    count = 0
    // arrow functionで定義した関数におけるthisは、どんな呼び出し方をしても変化しない
    // なのでどんな呼ばれ方をしてもthisはクラスのインスタンスになるため、確実にincrementを呼ぶ
    up = () => {
        this.increment
    }
    increment() {
        this.count++
    }
}
const classField = new ClassField()
classField.up()
console.log(classField.count) // 0
classField.increment()
console.log(classField.count) // 1