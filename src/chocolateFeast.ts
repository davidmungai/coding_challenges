let n = 15 //amount to spend
let c = 3  //barcost
let m = 2  //wrapper
let boughtBars = 0
let promotoinalBar = 0
let totalEaten = 0;
let availableWrapper = 0


if (
    n > c
) {
    boughtBars = Math.floor(n / c)

} else {
    boughtBars = 0
}


if (availableWrapper <= m) {
    totalEaten = totalEaten
}

while (availableWrapper >= m) {
    promotoinalBar = Math.floor(boughtBars / m)//3/2=1
    availableWrapper = availableWrapper - m + promotoinalBar
    totalEaten = totalEaten + promotoinalBar//3+1
}







console.log(availableWrapper)