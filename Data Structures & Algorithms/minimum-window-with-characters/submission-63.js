class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let leftptr = 0;
        let rightptr = 0;
        let frequency = {}; //determines whether window is valid 
        //if (t.length > s.length || !([...t].every(char => s.includes(char)))) return "";
        
        
        for (let i = 0; i < t.length; i++) {
            if (!frequency[t[i]]) {
                frequency[t[i]] = 1;
            } else {
                frequency[t[i]]++;
            }
        }
        let need = Object.keys(frequency).length;
        let have = 0;
        let windowFrequency = {};
        //let minWindowSubstring = [];
        let resultIndex = [0, Infinity];
        
        while (rightptr < s.length) {
            if (Object.hasOwn(frequency, s[rightptr])) { //O(1) lookup whether the character is in the frequency table
                //console.log('This character exists in the frequency table:', s[rightptr]);
                if (!windowFrequency[s[rightptr]]) {
                    windowFrequency[s[rightptr]] = 1;
                } else {
                    windowFrequency[s[rightptr]]++;
                }

                if (windowFrequency[s[rightptr]] === frequency[s[rightptr]]) { //O(1) check if the key's value is equal to the frequency. condition becomes true once a frequency is met  
                    //console.log(windowFrequency[s[rightptr]], frequency[s[rightptr]])
                    have++;
                    while (have === need) {
                        if (Object.hasOwn(frequency, s[leftptr])) { //leftptr is a character within t
                            windowFrequency[s[leftptr]]--;
                            if ((windowFrequency[s[leftptr]] < frequency[s[leftptr]])) have--; //no longer equal to the frequency
                            
                        }

                        if (((rightptr) - leftptr) < (resultIndex[1] - resultIndex[0])) {
                            //console.log(((rightptr) - leftptr))
                            //console.log(s.slice(leftptr, rightptr+1))
                            resultIndex = [leftptr, rightptr];
                        }
                        //minWindowSubstring.push(s.slice(leftptr, rightptr + 1));
                        leftptr++;
                        //console.log(s.slice(leftptr, rightptr + 1), have, need)
                    }                    
                } 
            }
            rightptr++;

        }
        if (resultIndex[1] !== Infinity) {
            return s.slice(resultIndex[0], resultIndex[1] + 1);
        } else {
            return "";
        }
        

    }   
}
