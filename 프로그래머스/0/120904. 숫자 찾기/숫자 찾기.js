function solution(num, k) {
    let answer = num.toString().indexOf(k);
    
    return answer!= -1 ? answer + 1 : answer;
}