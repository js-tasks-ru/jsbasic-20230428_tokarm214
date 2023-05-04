function ucFirst(str) {
  if (typeof str === "string") {
    if (str) return str[0].toUpperCase() + str.slice(1);
    else return str;
  }
  return false;
}
