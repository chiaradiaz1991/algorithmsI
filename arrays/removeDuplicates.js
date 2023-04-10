// Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element appears
// only once. The relative order of the elements should be kept the same.
// Then return the number of unique elements in nums.

// Consider the number of unique elements of nums be k, to get accepted,
// you need to do the following things:

// Change the array nums such that the first k elements of nums
// contain the unique elements in the order they were present in nums initially.
// The remaining elements of nums are not important as well as the size of nums.

// 1. how many unique values are in input array
// 2. return how many unique numbers are in the input array
// 3. return this number and also in an array [0,1,2,3,4...]

const removeDuplicates = (nums) => {
  let counter = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[counter] = nums[i];
      counter += 1;
    }
  }
  return counter;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // Input array
// const expectedNums = [0, 1, 2, 3, 4]; // The expected answer with correct length

const k = removeDuplicates(nums);

console.log("k: ", k);
