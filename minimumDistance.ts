

let a: number[] = [3, 2, 1, 2, 3]
let num: any = []
let minimumCount: number = a.length

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    let indexA = a.indexOf(element)
    a[a.indexOf(element)] = 0.1
    let indexB = a.indexOf(element)
    if (indexB !== -1) {
        if (indexB - indexA < minimumCount) {
            minimumCount = indexB - indexA
        }
    }

}

if (minimumCount == a.length){
 minimumCount=-1
}

console.log(minimumCount) 
