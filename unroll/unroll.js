function unroll(squareArray) {
  if (!squareArray || squareArray.length === 0) {
    return [];
  }

  const result = [];
  while (squareArray.length > 0) {
    // Move right
    result.push(...squareArray.shift());

    // Rotate remaining square clockwise
    squareArray = squareArray[0]?.map((_, index) => squareArray.map(row => row[index])).reverse();
  }

  return result;
}

module.exports = unroll;

