class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let leftPointer = 0;
        let rightPointer = numbers.length - 1;

        while(leftPointer < rightPointer){
            if(numbers[leftPointer] + numbers[rightPointer] === target)
              return [leftPointer+1, rightPointer+1]
            else if(numbers[leftPointer] + numbers[rightPointer]>target)
               rightPointer--;
            else leftPointer++;
        }
    }
}
