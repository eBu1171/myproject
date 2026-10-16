class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i = 0 ; i < nums.length ; i ++){
            for (let b = i + 1 ; b < nums.length ; b++ ){
                if(nums[i] + nums[b] == target){
                    return [i, b];
                }
            }
        }
    }
}
