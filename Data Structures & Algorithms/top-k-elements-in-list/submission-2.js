class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const set = new Set()
        for (let i=0; i< nums.length; i++){
            const n = nums[i]
            if(!map.has(n)){
                map.set(n, 1)
            }else{
                let count = map.get(n, 1)
                map.set(n, count+1)
                if(count+1 >=k){
                    set.add(n)
                }
            }
        }

        const sortedList = [...map.entries()].sort(([, valueA],[, valueB])=>{
            return valueB - valueA
        })
        return sortedList.map(([key])=> key).slice(0,k)
    
    }
}