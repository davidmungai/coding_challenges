let s='aba'
let repeat=10
let sCount=s.split(' ').filter(a=>a=='a').length
let incrementor=0;

for (let index = 0; index <= repeat; index++) {
    incrementor = incrementor+ sCount;
    console.log(incrementor)
    
}

