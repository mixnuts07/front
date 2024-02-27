// Map...キーと値のペアを保持。キーが最初に挿入された順序を覚えている。
const map1 = new Map();
map1.set("a", 1); // これ以外でプロパティを設定すると、Mapデータ構造ではなくオブジェクトを使用する。
// Instance Method
map1.clear();
map1.delete("a");
map1.get("a");
map1.has("a");
map1.keys();
map1.values();
map1.entries();
map1.forEach((it) => console.log(it));

console.log(map1.get("a")); // 1
// Map, Objectの違い。
// 偶発的なキーがMapにはない。（Objectにはプロトタイプがある）
// セキュリティでは、Objectはユーザーがプロトタイプを上書きできる可能性がある。→オブジェクトインジェクションがある。
// Mapのキーはあらゆる値がなることがある。
// Map.sizeでアイテム数を簡単に得ることができる。
// Mapではキーと値のペアを頻繁に削除する場面では性能が良くなる。
// シリアライズと解釈ではObjectの方が良さそう。
// JSON.stringify()でObject→JSONへシリアライズ
// JSON.parse()でJSON→Objectへシリアライズ
