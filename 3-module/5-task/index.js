function getMinMax(str) {
  str = str.split(" ").filter((value) => isFinite(value));
  return {
    min: Math.min(...str),
    max: Math.max(...str),
  };
}
