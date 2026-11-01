class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numberToIndexMap = new Map();
        let output = []
        for(let i=0; i<nums.length; i++){
            const n = nums[i];
            const counterpart = target - n;
            if(numberToIndexMap.has(counterpart)){
                output.push(i)
                output.push(numberToIndexMap.get(counterpart))
                break;
            }
            numberToIndexMap.set(n,i)
        }
        return output
    }
}
