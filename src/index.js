module.exports = function longestConsecutiveLength(array) {
  let savedLength = 0, tempLength = 1;
  array = array.sort((a, b) => {return a - b;});
  let savedNum = -1;
  for (num of array){
    if (num === (savedNum + 1)) {savedNum++; tempLength++;}
    else if (num === savedNum) continue;
    else {savedNum = num; if (savedLength < tempLength) savedLength = tempLength; tempLength = 1}
  }
  return savedLength;
}
