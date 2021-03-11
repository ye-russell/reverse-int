module.exports = function reverse (n) {
  let stringed = String(n);
  let reversed = "";
  for (i = stringed.length; i > 0; i--) {
    reversed += stringed[i-1]
  }
  return parseInt(reversed);
}
