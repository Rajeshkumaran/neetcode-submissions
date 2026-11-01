class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();

        for(let i=0;i< nums.length;i++){
            set.add(nums[i])
        }

        let max=0;
        let arr = [...set];
        let visitedMap = new Map();
        for(let i=0;i< arr.length;i++){
            const number = arr[i];
            if(visitedMap.get(number))
                continue;
            
            visitedMap.set(number, true)
            
            let seq = number+1;
            let count = 1;

            while(true){
                if(set.has(seq)){
                    count++;
                    seq+=1;
                    visitedMap.set(seq, true)
                }else{
                    break;
                }
            }
            max = Math.max(max, count)
        }
    return max
    }
}
