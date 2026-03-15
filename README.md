# Base256B

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Base256B is an ES module for [braille-encode](https://github.com/qntm/braille-encode/) by [qntn](https://github.com/qntm), providing 8-bit encoding with braille characters (0x2800-0x28FF in Unicode).

## Features

- Encode and decode binary data using braille characters
- Aesthetically pleasing representation of SHA1 hashes

## Usage

In your code:

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

## License

MIT License