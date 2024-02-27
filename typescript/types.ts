// 型の再利用 ... 既存の型を再利用して、新たな型を生み出すこと。

// typeof型演算子...変数から型を抽出する。
const point = { x: 135, y: 35 };
type Point = typeof point;
// type Point = {
//     x: number;
//     y: number;
// }

// keyof型演算子...オブジェクトの型からプロパティ名を型として返す型演算子。
type Person = {
  name: string;
};
type PersonKey = keyof Person;
// type PersonKey = "name"

type Book = {
  title: string;
  price: number;
  rating: number;
};
type BookKey = keyof Book;
// type BookKey = 'title' | 'price' | 'rating'

// インデックス型にkeyofを使うと、インデックスのキーの型が返る。
type MapLike = { [K: string]: any };
type MapKeys = keyof MapLike;
// type MapKeys = string | number ... キーがstringの場合、number型のキーアクセスのobj[0]はobj['0']と同じになるから。
type MapLike2 = { [K in "X" | "Y" | "Z"]: any };
type MapKeys2 = keyof MapLike2;
// type MapKeys2 = "X" | "Y" | "Z"

// Required<T> ... Tの全てのプロパティからオプショナルであることを意味する「？」を取り除く
type Person2 = {
  surName: string;
  middleName?: string;
  givenName: string;
};
type RequiredPerson = Required<Person2>;
// type RequiredPerson = {
//     surName: string;
//     middleName: string;
//     givenName: string;
// }

// Readonly<T>...オブジェクトの型Tのプロパティを全て読み取り専用にする。
type ReadonlyPerson = Readonly<Person2>;
// type ReadonlyPerson = {
//     readonly surName: string;
//     readonly middleName?: string | undefined;
//     readonly givenName: string;
// }

// Partial<T>...オブジェクトの型の全てのプロパティをオプションプロパティにする。
type PartialPerson = Partial<Person2>;
// type PartialPerson = {
//     surName?: string | undefined;
//     middleName?: string | undefined;
//     givenName?: string | undefined;
// }

// Record<Keys, Type>...プロパティのキーがKeys、値がTypeのオブジェクトの型を作る。
type StringNumber = Record<string, number>;
const recordValue: StringNumber = { a: 1, b: 2 };

// Pick<T, Keys>...型TからKeysに指定したキーだけを含むオブジェクトの型を返す
type PickPerson = Pick<Person2, "surName">;
// type PickPerson = {
//     surName: string;
// }

type Book2 = {
  id: number;
  title: string;
  author: Person;
  createdAt: Date;
  updatedAt: Date;
};
type BookInputData = Pick<Book2, "title" | "author">;

// Omit<T, Keys>...オブジェクトの型TからKeysで指定したプロパティを除いたObject型を返す。
type User = {
  surname: string;
  middleName?: string;
  givenName: string;
  age: number;
  address?: string;
  nationality: string;
  createdAt: string;
  updatedAt: string;
};
type Optional = "age" | "address" | "nationality" | "createdAt" | "updatedAt";
type PersonOptional = Omit<User, Optional>;
// type PersonOptional = {
//     middleName?: string | undefined;
//     givenName: string;
//     surname: string;
// }

// Exclude<T, U>...ユニオン型TからUで指定した型を取り除いたユニオン型を返す。
type Grade = "A" | "B" | "C" | "D" | "E";
type PassGrade = Exclude<Grade, "E">;
// type PassGrade = "A" | "B" | "C" | "D"

// Extract<T, U>...ユニオン型TからUで指定した型だけを抽出した型を返す
type FailedGrade = Extract<Grade, "D" | "E">;
// type FailedGrade = "D" | "E"

// Mapped Types ... ユニオン型を組み合わせて使う。入力の形式が決まっているもので使用する。
type SystemSupportLanguage = "en" | "fr" | "it" | "es";
type Butterfly = {
  [key in SystemSupportLanguage]: string;
};
const butterfly: Butterfly = {
  en: "Butterfly",
  fr: "Papillon",
  it: "Farfalla",
  es: "Mariposa",
  //   de: "Schmetterling",
};

// インデックスアクセス型...プロパティの型や配列要素の型を参照する方法。
type A = { foo: number };
type Foo = A["foo"];
// type Foo = number
type Foo1 = { a: number; b: string; c: boolean };
type T = Foo1[keyof Foo1];
// type T = string | number | boolean
