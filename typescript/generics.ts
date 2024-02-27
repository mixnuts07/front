// Generics...型の安全性とコードの共通化を両立することができる
function chooseRandomly<T>(v1: T, v2: T): T {
  return Math.random() <= 0.5 ? v1 : v2;
}
chooseRandomly<string>("WIN", "LOOSE");
chooseRandomly<number>(0, 1);
chooseRandomly<URL>(new URL("urlA"), new URL("urlB"));

// 型引数に制約をつける...extends
// extendsはClassにもInterfaceにもつけれる。
// Interfaceは実装ではimplements、型引数にはextendsを使う
function changeBackgroundColor<T extends HTMLElement>(element: T) {
  element.style.backgroundColor = "red";
  return element;
}

interface ValueObject<T> {
  value: T;
  toString(): string;
}

class UserID implements ValueObject<number> {
  public value: number;

  public constructor(value: number) {
    this.value = value;
  }

  public toString(): string {
    return `${this.value}`;
  }
}

class Entity<ID extends ValueObject<unknown>> {
  private id: ID;

  public constructor(id: ID) {
    this.id = id;
  }
}

// デフォルト引数
type MyErrorEvent<T = Error> = {
  error: T;
  type: string;
};

class NetworkError extends Error {
  constructor(e?: string) {
    super(e);
    this.name = new.target.name;
  }
}

const errorEvent: MyErrorEvent<Error> = {
  error: new Error("This is Error!!"),
  type: "syntax",
};

const networkErrorEvent: MyErrorEvent<NetworkError> = {
  error: new NetworkError("this is network error!!"),
  type: "network",
};
