class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftptr = 0, rightptr = height.length - 1;
        let leftMax = height[leftptr], rightMax = height[rightptr];
        let area = 0; 

        while (leftptr < rightptr) {
            //if they're equal length: intermediate areas are calculated anyway, regardless of the order 
            if (height[leftptr] <= height[rightptr]) { //left is the lower bound for height[i], so it's the height cap (direction on which way the water will spill) we can form. 
                //calculate the trapped water of the leftptr using the max of the left height (intermediate upper bound)
                leftMax = Math.max(height[leftptr], leftMax);
                area += leftMax - height[leftptr];
                leftptr++;

            } else  {//right is the lower bound for height[i] ((height[leftptr] > height[rightptr])), so it's the height cap we can form. 
                //calculate the trapped water of the rightptr using the max of the left height 
                rightMax = Math.max(height[rightptr], rightMax);
                area += rightMax - height[rightptr];
                rightptr--;

            }
        }
        return area;
    }
}
