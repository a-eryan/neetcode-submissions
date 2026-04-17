class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let complement; 
        let hashmap = {};
        for (let i = 0; i < nums.length; i++) {
            hashmap[nums[i]] = i; //store the number as the key so the value is O(1) lookup of the array's index
        }

        for (let i = 0; i < nums.length; i++) { //two-pass hashmap
            complement = target - nums[i];
            //does this complement exist within the hashmap?
            //EDGE CASE: nums[i] == complement
            // if (Object.values(hashmap).includes(complement)) {
            //     return [i, Number(Object.keys(hashmap).filter((index, num) => index !== i).find(index => hashmap[index] === complement))]
            // }
            /*
            The bottleneck: To find if a complement exists, you are using Object.values(hashmap).includes(complement) and .find(). 
            Because it has to scan through all the values in the object one by one, this operation takes O(n) time. Wrapped inside your main loop, your solution is running at O(n^2) time complexity, which is practically identical to the brute-force approach. 
            */


            if (complement in hashmap && hashmap[complement] !== i) {
                return [i, hashmap[complement]]
            } else {
                hashmap[nums[i]] = i;
            }

        }
    }
}
