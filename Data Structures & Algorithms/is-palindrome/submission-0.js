class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (!s) return true
        s = s.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().replace(/\s/g, '');

        let backwardArray = new Array(s.length);

        console.log(s)
        for (let i = 0; i < s.length; i++) {
            backwardArray[s.length - 1 - i] = s[i];
        }

        let backwardString = backwardArray.join('').replace(/\s/g, '')

        console.log(backwardString);

        if (s === backwardString) {
            return true
        } else {
            return false
        }




    }
}
