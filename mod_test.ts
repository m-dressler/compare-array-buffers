import { assert } from "jsr:@std/assert";
import compareArrayBuffers from "./mod.ts";

Deno.test("Same array buffers returns true", () => {
  const buf = new Int8Array([1, 2, 3]);
  const equal = compareArrayBuffers(buf, buf);
  assert(equal === true);
});

Deno.test("Equal array buffers returns true", () => {
  const buf1 = new Int8Array([1, 2, 3]);
  const buf2 = new Int8Array([1, 2, 3]);
  const equal = compareArrayBuffers(buf1, buf2);
  assert(equal === true);
});

Deno.test("Different array buffers returns false ", () => {
  const buf1 = new Int8Array([1, 2, 3]);
  const buf2 = new Int8Array([1, 1, 3]);
  const equal = compareArrayBuffers(buf1, buf2);
  assert(equal === false);
});

Deno.test("Different length array buffers returns false", () => {
  const buf1 = new Int8Array([1, 2, 3]);
  const buf2 = new Int8Array([1, 2]);
  const equal = compareArrayBuffers(buf1, buf2);
  assert(equal === false);
});

Deno.test("Equal array buffer different representation returns true", () => {
  const buf1 = new Int8Array([1, 2, 3, 4]);
  const buf2 = new Int16Array([0x0201, 0x0403]);
  const equal = compareArrayBuffers(buf1, buf2);
  assert(equal === true);
});

Deno.test("Multiple equal array buffers returns true", () => {
  const buf1 = new Int8Array([1, 2, 3, 4, 5, 6]);
  const buf2 = new Int8Array([1, 2, 3, 4, 5, 6]);
  const buf3 = new Int8Array([1, 2, 3, 4, 5, 6]);
  const buf4 = new Int8Array([1, 2, 3, 4, 5, 6]);
  const equal = compareArrayBuffers(buf1, buf2, buf3, buf4);
  assert(equal === true);
});

Deno.test(
  "Multiple equal array buffers different representation returns true",
  () => {
    const buf1 = new Int8Array([1, 2, 3, 4]);
    const buf2 = new Int16Array([0x0201, 0x0403]);
    const buf3 = new Uint32Array([0x04030201]);
    const buf4 = new Uint8Array([1, 2, 3, 4]);
    const equal = compareArrayBuffers(buf1, buf2, buf3, buf4);
    assert(equal === true);
  }
);

Deno.test("Single array buffer returns true", () => {
  const buf = new Int8Array([1, 2, 3]);
  const equal = compareArrayBuffers(buf);
  assert(equal === true);
});

Deno.test("No array buffer returns true", () => {
  const equal = compareArrayBuffers();
  assert(equal === true);
});
