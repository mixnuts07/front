// オブジェクトを浅くコピー...第一階層のみオブジェクトをコピーする
const sample: object = {
  year: 1999,
  month: 7,
};
// スプレッド構文で浅いコピーを実現する
const shallowCopied: object = { ...sample };

// オブジェクトのマージ
const obj1 = {
  merge: 1,
};
const obj2 = {
  merge: 2,
};
const merged = { ...obj1, ...obj2 };

// オブジェクトのサブセット（あるオブジェクトの一部分を切り取ったもの）
// lodashのpick, omitを使う

// RORO(Receive an Object, Return an Object)...関数やメソッドでオブジェクト1つを引数として受け、戻り値もオブジェクト1つとする考え方.
type UserInfo = {
  age: number;
  name?: string;
  country?: string;
  isVip?: boolean;
};
// infoで受け取らずに分割代入で特定のキーだけを引数に指定している。
function findUser({ age }: UserInfo): User {
  if (age >= 20) {
    // ...
  }
  // ...
}

// コンパニオン・オブジェクト...値と型に同名を与えてその両方を区別することなく使う。
// クラスを作るほどでもないが、ファクトリーメソッドとオブジェクトが欲しいときに有用。
export type Rectangle = {
  height: number;
  width: number;
};
export const Rectangle = {
  from(height: number, width: number): Rectangle {
    return {
      height,
      width,
    };
  },
};

// オブジェクトから型を生成する
const account = {
  accountName: "yyts",
  password: "ccbyncsa30",
  age: 80,
  plan: "Standard",
};
// 1. typeof オブジェクト
type Account = typeof account;
// 2. as const...プロパティを定数値で取得したい場合
const account1 = {
  accountName: "yyts",
  password: "ccbyncsa30",
  age: 80,
  plan: "Standard",
} as const;
type Account1 = typeof account1;

// オブジェクトからキーの型を生成する
const conf = {
  en: "Are you sure?",
  fr: "Êtes-vous sûr?",
  es: "Está seguro?",
  ja: "よろしいですか？",
  zh: "您确定吗？",
};
const conf2 = {
  en: "Are you sure?",
  fr: "Êtes-vous sûr?",
  es: "Está seguro?",
  ja: "よろしいですか？",
  zh: "您确定吗？",
} as const;
type Language = "en" | "fr" | "es" | "ja" | "zh";
type TypeOfLanguage = typeof conf;
type Language1 = keyof TypeOfLanguage;

// オブジェクトからプロパティ(Value)の型を生成する
type ConfirmationMessage = (typeof conf2)[keyof typeof conf2];

// 配列から型を生成する
const currencies = ["CNY", "EUR", "GBP", "JPY", "KRW", "USD"] as const;
type Currency = typeof currencies;
