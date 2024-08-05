function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    let char = str[end];
    if (seen[char] !== undefined) {
      start = Math.max(start, seen[char] + 1);
    }
    seen[char] = end;
    longest = Math.max(longest, end - start + 1);
  }

  return longest;
}

// Test cases
console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6