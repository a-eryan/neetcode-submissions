class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
        let hashmap = {};
        /*nums.length == 4
        i < nums.length -> go until 0,1,2,3
        */
        for (let i=0; i < nums.length; i++) {
            console.log(nums[i])
            if (!hashmap[nums[i].toString()]) {
                hashmap[nums[i].toString()] = 1; 
            } else {
                return true;
            } 
            // if (hashmap[nums[i].toString()] > 1) return true;
            // if (hashmap[nums[i].toString()] > 1) return true;
        }
        return false;
    }
}
