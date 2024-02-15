function solution(names) {
    var answer = names.filter((name, index) => index % 5 === 0);
    
    // names.forEach((name, index) => {
    //     if(index % 5 == 0) {
    //         answer.push(name);
    //     }
    // })
    return answer;
}