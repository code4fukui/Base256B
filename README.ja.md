# Base256B

Base256Bは[qntn](https://github.com/qntm)による[braille-encode](https://github.com/qntm/braille-encode/)のES modulesで、ブライユ文字(Unicode 0x2800-0x28FF)を使用した8ビットエンコーディングを提供します。

## 機能

- ブライユ文字を使ってバイナリデータの符号化・復号化
- SHA1ハッシュの美しい表現

## 使い方

コード内で:

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

MIT License