type numberUnion = number | string;
type sumFunc = (a: numberUnion, b: numberUnion) => numberUnion

function sum(a: number, b: number): number
function sum(a: string, b: string): string
function sum(a: numberUnion, b: numberUnion): numberUnion {
    let sum: numberUnion = 0;
    if (typeof a === 'number' && typeof b === 'number') {
        sum = a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        sum = `${parseInt(a, 10) + parseInt(b, 10)}`;
    }
    return sum
}
console.log(sum(1, 4))
console.log(sum(`1`, `4`))