# Base256B

Base256Bは、[qntm](https://github.com/qntm)氏による[braille-encode](https://github.com/qntm/braille-encode/)のESモジュール版であり、点字文字（Unicodeの0x2800-0x28FF）を用いた8ビットエンコードを提供します。

## 機能

- 点字文字を用いたバイナリデータのエンコードおよびデコード
- SHA1ハッシュの視覚的に美しい表現

## 使い方

コード内での使用例:

```javascript
import { Base256B } from "https://code4fukui.github.io/Base256B/Base256B.js";

const encoded = Base256B.encode(new Uint8Array([1, 2, 3, 4]));
console.log(encoded);
const decoded = Base256B.decode(encoded);
console.log(decoded);

const key = new Uint8Array(32); // 32byte -> 32chars
crypto.getRandomValues(key);
const encoded2 = Base256B.encode(key);
console.log(encoded2); // ⢉⠶⠧⢢⡜⢈⠨⣗⢃⠇⡲⡙⠭⡤⡥⣁⡛⡘⣐⡢⣶⢠⠟⠛⠻⠔⠳⡀⠿⢧⡶⣠
```

## ライセンス

MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
