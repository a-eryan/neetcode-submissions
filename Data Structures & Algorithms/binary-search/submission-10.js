class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let leftptr = 0;
        let rightptr = nums.length - 1;
        let mid = Math.trunc( nums.length / 2);

        while (leftptr <= rightptr) {
            
            if (nums[mid] == target) {
                return mid;
            }

            if (target > nums[mid]) { //the target exists on the right side of the array 
                leftptr = mid + 1;

            } else { //target < nums[mid] the target exists on the left side of the array 
                rightptr = mid - 1; 
            }
            mid = Math.trunc( (leftptr + rightptr) / 2);
        }
        return -1;
    }
}
