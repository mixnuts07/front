// infer...条件付き型の中で型を推論したり、その型を後続の型情報の中で再利用するのに役立つ。

// 関数の型から戻り値の型を取得する。
// Tが関数の型を持つ場合、その関数の戻り値の型をRとして捉え、それを結果として返す。
type ReturnTypes<T> = T extends (...args: any[]) => infer R ? R : any;

type Func = () => string;
type Result = ReturnTypes<Func>; // Resultの型はstring

// inferを使用して配列の要素の型を推論
type ElementOf<T> = T extends Array<infer E> ? E : never;
const arr = [1, 2, 3];
type NumberType = ElementOf<typeof arr>; // number

// inferを使用してプロミスの戻り値の型を推論
type PromiseType<T> = T extends Promise<infer R> ? R : never;

async function foo() {
  return 42;
}

type ResolveType = PromiseType<ReturnTypes<typeof foo>>; // number
