// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

 

/**
 * @param {string} s
 * @return {string}
 */
function isVowel(letter){
    return letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U' || letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'
}

function swap(letter1, letter2, str){
    let temp = str[letter1];
    str[letter1] = str[letter2];
    str[letter2] = temp;
}
var reverseVowels = function(s) {
    let first = 0;
    let last = s.length-1;
    s = s.split('');
    while(first < last){
        if(!isVowel(s[first])){
            first++;
        }
        else if(!isVowel(s[last])){
            last--;
        }
        else{
            swap(first,last,s);
            first++;
            last--;
        }
    }
    return s.join('')

    
};