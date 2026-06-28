class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        //the middle is n/2:

        let min = nums[0];
        let leftptr = 0
        let rightptr = nums.length - 1;
        let mid = Math.trunc(nums.length / 2);


        while (leftptr < rightptr) {
            if (nums[mid] > nums[rightptr]) { //the minimum exists on the right side (the array "resets" on the left, while on the right it sequentially ascends)
                leftptr = mid + 1;


            } else { //nums[mid] < nums[rightptr]: the minimum exists on the left side (the array "resets" on the right, while on the left it sequentially decends  )
                rightptr = mid; 

            }

            mid = Math.trunc( (rightptr +  leftptr) / 2);
            min = Math.min(min, nums[mid])

        }

        return min;
        


    }
}
