function bhaskara(a, b, c) {
    let delta = b ** 2 - 4*a*c
    if (delta < 0) {
        console.log('Delta é negativo')
    } else {
        console.log((-b + Math.sqrt(delta))/2*a)
        console.log((-b - Math.sqrt(delta))/2*a)
    }
}

bhaskara(1, 3, 2)