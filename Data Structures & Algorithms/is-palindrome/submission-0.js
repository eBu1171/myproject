class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    
    isPalindrome(s) {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        if(clean.split("").reverse().join("") == clean){
            return true
        }else {
            return false
        }
    }
}
