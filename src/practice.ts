interface Pointer{
    x:number;
    y:number;
}

function myPow(x: number, n: number) {
    let arr = `${x};`.repeat(Math.abs(n)).split(';')
    return arr.reduce((acc, num) => {
        if (n > 0) {
            acc = acc * parseFloat(num)

        } else {
            acc = acc * parseFloat(num)
        }
        return acc
    }, 1)
};





myPow(2, 0.00001);