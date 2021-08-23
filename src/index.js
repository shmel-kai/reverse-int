module.exports = function reverse (n) {
  const str = n.toString().replace('-','');
  const array = str.split('').reverse().join('');
  
  return array;
}
