function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) return false;
  let frequencyCounter = {};
  
  for (let char of str1) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!frequencyCounter[char]) {
      return false;
    } else {
      frequencyCounter[char]--;
    }
  } 
  return true;
}