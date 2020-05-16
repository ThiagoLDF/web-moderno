function entreDezEVinte(nums) {
    let dentro = 0
    let fora = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 10 && nums[i] <= 20) {
            dentro++
        } else {
            fora++
        }
    }
    return `Entre 10 e 20: ${dentro} fora: ${fora}` 
}

const nums = [5, 7, 10, 13, 49, 6, 20, 17, 18, 200]
console.log(entreDezEVinte(nums))