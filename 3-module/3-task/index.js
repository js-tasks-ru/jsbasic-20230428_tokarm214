function toUpperCaseFirstLetter(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}

function camelize(str) {
  return str
    .split("-")
    .map((word, index) => (index == 0 ? word : toUpperCaseFirstLetter(word)))
    .join("");
}
