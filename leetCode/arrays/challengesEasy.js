/**
 * CHALLENGE [EASY]: Contains Duplicate
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
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

/**
 * CHALLENGE [EASY]: Valid Anagram
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let count = {};
  for (let char of s) {
  }
};

/**
 * CHALLENGE [EASY]: Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {};
