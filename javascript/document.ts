// Document...Documentインターフェースはブラウザーに読み込まれたWebページを表し、DOMツリーであるWebページのコンテンツへの入口としての役割を果たす。
// EventTarget　← Node ← Document

// documentオブジェクト...ブラウザ上で表示されたドキュメントを操作することができる。多くのプロパティ（値）やメソッド（処理）を持っている。

// Ex.Cookie（ブラウザに保存されるデータ）を保存・取得する。
// Cookieに保存することで、ログインフォームにニックネームやメアドを記入する際に毎回記入する必要がなくなる。

// Cookieの取得
document.cookie;

// Cookieの保存
// cookie名=値;
// expires=有効期限
// domain=ドメイン名
// path=パス名
document.cookie = "email=test@gmail.com";
