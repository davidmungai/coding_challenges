let SArray: number[] = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]

let swapped: boolean = false

do {
    swapped = false
    for (let i: number = 0; i <= SArray.length; i++) {

        if (SArray[i] > SArray[i + 1]) {
            let a = SArray[i];
            let b = SArray[i + 1]
            SArray[SArray.indexOf(SArray[i + 1])] = a
            SArray[SArray.indexOf(SArray[i])] = b
           swapped=true
        }

    }



} while (swapped);

console.log(SArray)