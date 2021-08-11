const moveArrayItem = <T = any>(
  array: any[],
  startIdx: number,
  endIdx: number
): T[] => {
  if (startIdx < 0 || startIdx >= array.length)
    throw new Error('startIdx out of bounds');
  if (endIdx < 0 || endIdx >= array.length)
    throw new Error('endIdx out of bounds');

  if (!Array.isArray(array)) throw new Error('Provided object not an array');

  const item = array[startIdx];

  const arrWithoutItem = array.filter((_, idx) => idx !== startIdx);

  const lhs = arrWithoutItem.slice(0, endIdx);
  const rhs = arrWithoutItem.slice(endIdx, arrWithoutItem.length);

  console.log(lhs, rhs);

  const newArray = [...lhs, item, ...rhs];

  return newArray;
};

export default moveArrayItem;
