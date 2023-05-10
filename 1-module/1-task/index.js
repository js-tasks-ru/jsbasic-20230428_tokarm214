function factorial(num) {
  if (Number.isInteger(num) && num >= 0) {
    let result = 1;
    for (let count = 2; count <= num; ++count) {
      result *= count;
    }
    return result;
  }
  return false;
}
