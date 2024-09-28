# @md/compare-array-buffers

Utility function to compare two or more ArrayBuffers for equality.

## Example

```
import compareArrayBuffers from "@md/compare-array-buffers";

const buf1 = new Int8Array([1, 2, 3, 4]);
const buf2 = new Int16Array([0x0201, 0x0403]);
const areEqual1 = compareArrayBuffers(buf1, buf2); // = true


const buf3 = new Int8Array([1, 2, 3, 4]);
const buf4 = new Int8Array([1, 1, 1, 1]);
const areEqual2 = compareArrayBuffers(buf3, buf4); // = false
```