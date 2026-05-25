class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let uniqueNums = Array.from(new Set(nums)); //convert back to array to access index O(n)
        if (uniqueNums.length == 0) return 0
        let hashmap = {};

        for (let i = 0; i < uniqueNums.length; i++) { //O(n)
            let counter = 0;
        
            if (!uniqueNums.includes(uniqueNums[i] - 1)) { //start of the sequence 
                //At most, once: O(n-1) iterations 
                while (uniqueNums.includes(uniqueNums[i] + counter)) { //keep checking the subsequent number exists
                    counter++; //increment
                    hashmap[uniqueNums[i]] = counter; //uppdate the follow
                }
            }
        }
        return Math.max(...Object.values(hashmap)); //dearray with spread operator 
    }
}
