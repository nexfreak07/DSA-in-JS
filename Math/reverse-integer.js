// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


/**
 * @param {number} x
 * @return {number}
 */

 function isInInt32Range(num) {
  return num >= -(2 ** 31) && num <= (2 ** 31);
}
var reverse = function(x) {

    let flag = 1;
    if(x < 0){
        flag = flag * -1
        x = x * -1
    }
    let reverse = 0;
    while(x > 0){
        let lastDigit = Math.floor(x % 10);
        reverse = reverse * 10 + lastDigit;
        x = Math.floor(x / 10);
    }
    let ans = reverse * flag;

    if(!isInInt32Range(ans)){
        return 0
    }

    return ans
};