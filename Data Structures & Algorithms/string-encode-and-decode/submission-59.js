class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length == 0) return '❌'   //[]
        let words = [];
        for (let i = 0; i < strs.length; i++) {
            let word = [];
            for (let j = 0; j < strs[i].length; j++) {
                word.push(strs[i][j].charCodeAt(0));
            }
            words.push(word);
        }
        
       return words.map((word) => word.join()).join('|'); //convert nested array into string with comma seperated characters and pipe as a string element delimiter 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str == '❌') return []
        let pipeDelimited = str.split("|").flat(); //pipeDelimited [ '72,101,108,108,111', '87,111,114,108,100' ]

        let decodedStrings = [];
        
        for (let i = 0; i < pipeDelimited.length; i++) {
            let commaDelimited = [];
            commaDelimited.push(pipeDelimited[i].split(",").map(Number).flat());
            if (String.fromCharCode(...commaDelimited.flat()) == '\x00') {
                decodedStrings.push('');            
            } else {
                decodedStrings.push(String.fromCharCode(...commaDelimited.flat()))
            }
            console.log(i, decodedStrings.length);

        }
        console.log('pipeDelimited', pipeDelimited)
        console.log('decodedStrings', decodedStrings)
        return decodedStrings;
    }
}
