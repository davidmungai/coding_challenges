let s1 = "hello";
let s2 = "world";





function newFunction(s1:string,s2:string):string {
    let answer:string='';
    for (const str of s1) {
        if (s2.includes(str)) {
            answer = 'YES';
        } 
    }
    if(answer === ''){
        answer = 'NO';
    }

    return answer;
}
