class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        charCount = {}
        left = 0
        result = 0
        maxFreq = 0
        for r in range(len(s)):
            charCount[s[r]] = 1 + charCount.get(s[r] , 0)
            maxFreq = max(maxFreq , charCount[s[r]])
            window = r - left + 1
            replacement = window - maxFreq
            if (replacement > k):
                charCount[s[left]] -= 1
                left += 1
            result = max(result , r - left + 1)
            

        return result 