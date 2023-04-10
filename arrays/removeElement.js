// Then return the number of elements in nums which are not equal to val.
// onsider the number of elements in nums which are not equal to val be k, to get accepted,

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

let val = 3;

const nums = [3, 2, 2, 3];

const removeElement = (nums, val) => {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k += 1;
    }
  }
  return k;
};

console.log("removeElement: ", removeElement(nums, val));
