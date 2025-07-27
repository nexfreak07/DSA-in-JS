// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

 

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit. 

/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let largest = -1;
    let secondLargest = -1;
    for(let i=0; i<s.length; i++){
        if(!isNaN(s.charAt(i))){
            if(Number(s[i]) > largest){
                secondLargest = Number(largest);
                largest = Number(s[i])
            }
            else if(Number(s[i]) !== largest && Number(s[i])> secondLargest){
                secondLargest = Number(s[i])
            }
        }
    }
    return secondLargest;
    
};