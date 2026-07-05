class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let leftptr = 0;
        let rightptr = nums.length - 1;


        while (leftptr <= rightptr) {
            let mid = Math.trunc((leftptr + rightptr) / 2);

            if(nums[mid] == target) {
                return mid;
            }


            console.log('Leftptr index:', leftptr, 'and value is:', nums[leftptr])
            console.log('Rightptr index:', rightptr, 'and value is:', nums[rightptr])
            console.log('Mid index:', mid, 'and value is:', nums[mid])

            console.log('')
            console.log('')
            if (nums[mid] >= nums[leftptr]) { //[4, 5, 6, ...] left side is the  ascending order 
                if (target > nums[mid] || nums[leftptr] > target) { 
                    leftptr = mid + 1; // abandon left, search the right portion
                } else {
                    rightptr = mid - 1; // otherwise, search the left portion
                }
            } else { //nums[mid] >= nums[leftptr]:  [4, 5, 6, ...] -> [... 0, 1, 2] right side is the ascending order 
                if (nums[mid] > target || nums[rightptr] < target) { //search the left portion within the right 
                    rightptr = mid - 1;
                } else {
                    leftptr = mid + 1; //search the right portion within the right 
                }
            }


        } 
        return - 1;
    }
}
