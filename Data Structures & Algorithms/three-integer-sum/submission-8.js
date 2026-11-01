class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    constructor(){
        this.cache = new Map();
    }

    isTripletComputedAlready(triplet, output){
        for(let i=0;i<output.length;i++) {
            const o = output[i];
            const s = new Set(o);
            const [i1, i2, i3] = triplet;
            if(i1 == i2 && i2 == i3 && i1== i3) {
               if(i1 == o[0] && i2 == o[1] && i3 == o[2])
                  return true;
            continue;
            }
            else if(s.has(i1) && s.has(i2) && s.has(i3)) {
                return true;
            }
        }
        return false;
    }

    threeSum(nums) {
        let output=[]
        for(let i=0; i< nums.length;i++){
            let {data:responses, fromCache} = this.twoSum(nums, 0 - nums[i], i)
            if(fromCache) continue;
            if(responses.length){
                for(let j=0;j<responses.length;j++)
                {
                    const [i1, i2] = responses[j]
                    if(this.isTripletComputedAlready([nums[i],i1, i2], output)) continue;

                    output.push([nums[i],i1, i2])
                    

                }

            }

        }
        return output
    }
    

    twoSum(nums, target, notIncludeIndex) {
        if(this.cache.has(target)){
            return { data: this.cache.get(target), fromCache: true}
        }
        const numberToIndexMap = new Map();
        let output = []
        for(let i=0; i<nums.length; i++){
            if(i===notIncludeIndex) continue;
            const n = nums[i];
            const counterPart = target - n;
            if(numberToIndexMap.has(counterPart)){
                output.push([n,counterPart])
            }
            numberToIndexMap.set(n,i)
        }
        this.cache.set(target, output)
        return {data: output, fromCache: false}
    }
}