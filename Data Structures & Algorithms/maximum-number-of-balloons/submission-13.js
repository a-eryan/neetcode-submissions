class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        let balloonCharCounter = {
            bCount: 0,
            aCount: 0,
            twoLCount: 0,
            twoOCount: 0,
            nCount: 0
        }
        let lPair = 0;
        let oPair = 0; 

        console.log(text.split('').sort().join(''));
        
        for (let i = 0; i < text.length; i++) {


            if (text[i] == 'b') {
                balloonCharCounter.bCount++;
            }
            if (text[i] == 'a') {
                balloonCharCounter.aCount++;
            }
            if (text[i] == 'l') {
                lPair++;

                if (lPair % 2 == 0) {
                    balloonCharCounter.twoLCount++;                 
                }

            }
            if (text[i] == 'o') {
                oPair++;

                if (oPair % 2 == 0) {
                    balloonCharCounter.twoOCount++;
                }
            }
            if (text[i] == 'n') {
                balloonCharCounter.nCount++;
            }

        }
        console.log(balloonCharCounter);
        return Math.min(...Object.values(balloonCharCounter))
    }

}
