/**
 * @param arrayBuffers A list of arrayBuffers such as `Int8Array` to compare
 * @returns True if all arrayBuffers are equal, false otherwise
 */
export default function compareArrayBuffers(
  ...arrayBuffers: ReadonlyArray<ArrayBuffer>
): boolean {
  const bufferCount = arrayBuffers.length;
  if (bufferCount < 2) return true;

  const { byteLength } = arrayBuffers[0];

  for (let i = 1; i < bufferCount; ++i)
    if (arrayBuffers[i].byteLength !== byteLength) return false;

  const dataViews = arrayBuffers.map((entry) => {
    if ("buffer" in entry && entry.buffer instanceof ArrayBuffer)
      return new DataView(entry.buffer);
    else return new DataView(entry);
  });

  for (let i = 0; i < byteLength; i++) {
    const value = dataViews[0].getInt8(i);
    for (let j = 1; j < dataViews.length; j++)
      if (value !== dataViews[j].getInt8(i)) return false;
  }
  return true;
}
