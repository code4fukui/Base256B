//import { Base16384 } from "https://code4fukui.github.io/Base16384/Base16384.js";
import { Base16384 } from "./Base16384.js";

const encoded = Base16384.encode(new Uint8Array([1, 2, 3, 4]));
console.log(encoded);
const decoded = Base16384.decode(encoded);
console.log(decoded);
