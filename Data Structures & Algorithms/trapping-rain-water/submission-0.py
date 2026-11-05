class Solution:
    def trap(self, height: List[int]) -> int:
        left = 1 
        right = len(height) - 2

        leftmax = height[0]
        rightmax = height[-1]
        water = 0
        while left <= right: 
            if leftmax <= rightmax:
               
                if leftmax < height[left]:
                    leftmax = height[left]
                else:
                    water += min(leftmax , rightmax) - height[left]

                left += 1


            else:
       
                if rightmax < height[right]:
                    rightmax = height[right]
                else: 
                    water += min(leftmax , rightmax) - height[right]

                right -= 1

        return water
        
        