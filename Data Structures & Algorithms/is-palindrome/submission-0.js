class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (!s) return true
        s = s.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().replace(/\s/g, '');

        let backwardArray = new Array(s.length);

        for (let i = 0; i < s.length; i++) {
            backwardArray[s.length - 1 - i] = s[i];
        }

        let backwardString = backwardArray.join('').replace(/\s/g, '')


        if (s === backwardString) {
            return true
        } else {
            return false
        }




    }
}
