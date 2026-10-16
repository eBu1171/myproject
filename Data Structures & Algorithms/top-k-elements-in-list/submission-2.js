class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const top = {};
        const groups = {};
        for(let key of nums){
            if(!(key in groups)){
                groups[key] = 1;
            } else {
                groups[key]++;
            }
        }
        const sorted = Object.keys(groups).sort((a, b) => groups[b] - groups[a]);
        return sorted.slice(0, k).map(Number);
    }
}
