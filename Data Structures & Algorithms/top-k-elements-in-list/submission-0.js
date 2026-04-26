class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashmap = {};
        for (let i = 0; i < nums.length; i++) {
            if (!(hashmap[nums[i]])) {
                hashmap[nums[i]] = 1; 
            } else {
                hashmap[nums[i]]++;
            }
        }
        //sort the object by values in descending order 
        const topKStats = Object.entries(hashmap).sort((a, b) => b[1] - a[1]).slice(0, k);
        return topKStats.map((topKArray) => Number(topKArray[0])); //return only the number, not the quantity of the number


    }
}
