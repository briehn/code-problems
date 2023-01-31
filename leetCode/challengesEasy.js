/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let count = {};
  let dup = false;
  for (let num of nums) {
    if (!count[num]) {
      count[num] = 1;
    } else {
      count[num]++;
    }
  }
  Object.keys(count).forEach((key) => {
    if (count[key] > 1) dup = true;
  });
  return dup;
};
