class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let cMap = new Map();
        const groupByCount = new Map()
        for (let i=0; i< nums.length; i++){
            const n = nums[i]
            cMap.set(n,  (cMap.get(n)||0)+1)
        }

        console.log("ss",cMap);

        [...cMap].forEach(([key,value])=>{
            let data = groupByCount.get(value) || []
            data.push(key)
            groupByCount.set(value,data)
        })
        console.log(groupByCount)

        const a = [...groupByCount].reverse()
        let max = Number.MIN_VALUE
        for(let i=0;i<a.length;i++){
            const [key] = a[i];
            max = Math.max(key, max)
        }
        console.log(max)
        let output = [];

        while(true){
            if(groupByCount.get(max))
                output.push(...groupByCount.get(max))
            max--
            if(output.length>=k) break;
        }

        return output.slice(0,k)
    }
}

