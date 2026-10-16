class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = {")" : "(" , "]" : "[" , "}" : "{"};
        for (let char of s){
            if(char === "(" || char === "[" || char === "{" ) {
                stack.push(char);
            }
            else {
                if(stack.length === 0){
                    return false;
                }
                if(stack[stack.length - 1] !== pairs[char]){
                    return false 
                }         
                stack.pop();

            }
        }
        return stack.length === 0;
    }
}
