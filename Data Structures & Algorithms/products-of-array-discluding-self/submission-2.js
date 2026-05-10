class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let resultArray = new Array(nums.length);
        let prefix = new Array(nums.length); //corresponding elements of num's prefix product (left)
        let postfix = new Array(nums.length); //corresponding elements of num's postfix product (right)

        for (let i = 0; i < nums.length; i++) { 
            if (i == 0) {
                prefix[0] = 1;
            } else { //cumulative effect: multiply the previous product 
                prefix[i] = prefix[i-1] * nums[i-1]   
            } 
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            if (i == nums.length - 1) {
                postfix[i] = 1; //nothing to the right, so
            } else { //multiply the previous product 
                postfix[i] = postfix[i + 1] * nums[i + 1];
            }
            resultArray[i] = prefix[i] * postfix[i]; //multiply the left and right products for nums[i]
        }
        return resultArray;
    }
}
