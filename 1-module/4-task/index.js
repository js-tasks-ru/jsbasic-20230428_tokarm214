function checkSpam(str) {
  const FIRST_CHECK_VALUE = "1xBet";
  const SECOND_CHECK_VALUE = "XXX";

  str = str.toLowerCase();
  if (
    str.includes(FIRST_CHECK_VALUE.toLowerCase()) ||
    str.includes(SECOND_CHECK_VALUE.toLowerCase())
  ) {
    return true;
  }

  return false;
}
