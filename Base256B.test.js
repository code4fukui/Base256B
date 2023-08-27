import * as t from "https://deno.land/std/testing/asserts.ts";
import { Base256B } from "./Base256B.js";
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

Deno.test("simple", () => {
  const org = new Uint8Array([0, 1, 2, 3]);
  const encoded = Base256B.encode(org);
  //console.log(encoded); 
  t.assertEquals(encoded, "⠀⢀⠠⢠");
  const decoded = Base256B.decode(encoded);
  t.assertEquals(decoded, org);
});
Deno.test("abc", () => {
  const s = new TextEncoder().encode("abc");
  const encoded = Base256B.encode(s);
  //console.log(encoded); 
  const decoded = Base256B.decode(encoded);
  t.assertEquals(decoded, s);
});
Deno.test("encode", () => {
  const s = new TextEncoder().encode("1234567");
  const encoded = Base256B.encode(s);
  t.assertEquals(encoded, "⣄⡤⣤⡔⣔⡴⣴");
});
Deno.test("deode", () => {
  const decoded = Base256B.decode("⣄⡤⣤⡔⣔⡴⣴");
  const s = new TextDecoder().decode(decoded);
  t.assertEquals(s, "1234567");
});
Deno.test("uuid1", () => {
  const uuid = crypto.randomUUID();
  const b = Base16.decode(uuid);
  const s = Base256B.encode(b);
  //console.log(uuid);
  //console.log(Base16.encode(b));
  //console.log(s);
  const b2 = Base256B.decode(s, 16);
  t.assertEquals(b, b2);
});
Deno.test("uuid2", () => {
  const decoded = Base256B.decode("⡭⡲⡉⣢⠸⡊⡎⢟⢙⣀⡜⢀⠧⡛⢉⠽", 16);
  const s = Base16.encode(decoded);
  t.assertEquals(s, "ba5698530e5878ed8d113c01e2dc89ae");
});

Deno.test("sha128", () => {
  const sha = Base16.decode("17057684bea1f9331418b633a8f373119d765fd4");
  const s = Base256B.encode(sha);
  t.assertEquals(s, "⣰⢐⡶⠑⡽⢅⣏⣤⡐⡈⡵⣤⠍⣧⣦⣀⣙⡶⣺⡓");
  const sha2 = Base256B.decode(s);
  t.assertEquals(sha, sha2);
});
Deno.test("orgsrc", () => {
  const uint8Array = Uint8Array.from([
    0xd4, 0x1d, 0x8c, 0xd9, 0x8f, 0x00, 0xb2, 0x04,
    0xe9, 0x80, 0x09, 0x98, 0xec, 0xf8, 0xf1, 0x1f
  ]);
  const str = Base256B.encode(uint8Array);
  t.assertEquals(str, "⡓⣘⠙⣋⢹⠀⡥⠐⢏⠁⢈⡉⠟⡏⣇⣸");
});
