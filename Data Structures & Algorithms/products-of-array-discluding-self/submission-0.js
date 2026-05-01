class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let resultArray = [];
        for (let i = 0; i < nums.length; i++) { //element
            let numsCandidates = [];

            for (let j = 0; j < nums.length; j++) { //the rest of the numbers 
                if (j !== i) {
                    numsCandidates.push(nums[j])
                }
            }
            resultArray.push(numsCandidates.reduce((acc, curr) => acc * curr, 1)); //ith product of the rest of the elements
        }
        return resultArray;
    }
}
