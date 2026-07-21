class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s) return 0;
        let leftptr = 0;
        let rightptr = 1;
        let intermediateSubstringSet = new Set(s[leftptr]);
        let maxSubstring = 1;

        while (rightptr < s.length) {

            while(intermediateSubstringSet.has(s[rightptr])) {
                intermediateSubstringSet.delete(s[leftptr]);
                leftptr++;
            }
            intermediateSubstringSet.add(s[rightptr]);
            
            maxSubstring = Math.max(intermediateSubstringSet.size, maxSubstring);
            rightptr++;

        }

        return maxSubstring;


    }
}
