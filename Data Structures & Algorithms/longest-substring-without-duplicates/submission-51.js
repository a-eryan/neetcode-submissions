class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let leftptr = 0;
        let rightptr = 1;
        let maxUniqueSubstring = 0;
        let subStrings = 0; 


        while (rightptr < s.length) {
            console.log(leftptr, rightptr)
            if (s.slice(leftptr, rightptr).includes(s[rightptr])) {
                subStrings++;
                while (s.slice(leftptr, rightptr).includes(s[rightptr])) {
                    leftptr++;
                }
                rightptr++;
            } else {
                rightptr++;
            }
            maxUniqueSubstring = Math.max(rightptr - leftptr, maxUniqueSubstring);

        }

        if (subStrings == 0) return s.length;

        return maxUniqueSubstring;
    }
}
