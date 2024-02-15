function solution(names) {
    var answer = [];
    names.filter((name, index) => {
        if(index % 5 === 0) answer.push(name);
    })
    
    // names.forEach((name, index) => {
    //     if(index % 5 == 0) {
    //         answer.push(name);
    //     }
    // })
    return answer;
}