class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;
        let stack = [];

        for (let i = 0; i < s.length; i++) {
            if (this.isOpeningBracket(s[i])) {
                stack.push(s[i]); //   ([{
                console.log(stack)
            } else {
                if (s[i] == ')' && stack[stack.length - 1] == '(') {
                    console.log('case 1')
                    stack.pop();
                } else if (s[i] == '}' && stack[stack.length - 1] == '{') {
                    console.log('case 2')
                    stack.pop();
                } else if ( s[i] == ']' && stack[stack.length - 1] == '[') {
                    console.log('case 3')
                    stack.pop();
                } else {
                    return false; 
                }
            }
        }

        if (stack.length == 0) {
            return true;
        } else {
            return false;
        }

    }

    isOpeningBracket(char) {
        if (char == '(' || char == '{' || char == '[') {
            return true;
        } else {
            return false; 
        }
    }
}
