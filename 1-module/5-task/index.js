function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str = str.substring(0, maxlength - 1) + "…";
  }
  return str;
}
