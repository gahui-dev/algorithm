function solution(num_list) {
    let answer = num_list.reduce((a, v) => num_list.length >= 11 ? a + v : a * v)
//     var answer = 0;
    
//     if(num_list.length >= 11) {
//         num_list.forEach(num => {
//             answer += num;
//         })
//     } else {
//         answer = 1;
//         num_list.forEach(num => {
//             answer *= num;
//         })
//     }
    return answer;
}