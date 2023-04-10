// Given an integer array nums of length n, you want to create an array ans
// of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

// Constraints:

// n == nums.length
// 1 <= n <= 1000
// 1 <= nums[i] <= 1000

const nums = [1, 2, 1];
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]

const getConcatenation = (nums) => {
  let ans = [];
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < nums.length; i++) {
      ans.push(nums[i]);
    }
  }
  return ans;
};

console.log("getConcatenation: ", getConcatenation(nums));
