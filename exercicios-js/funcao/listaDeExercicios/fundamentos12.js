function fatorial(num) {
    if (num == 0) {
        return 1
    } else {
        for (let i = num - 1; i > 0; i--) {
            console.log(`${num} * ${i}`, num * i)
            num = num * i 
        }
        return num
    }
}

console.log(fatorial(10))