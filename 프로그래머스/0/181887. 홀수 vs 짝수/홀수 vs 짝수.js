function solution(num_list) {
    let even = 0;
    let odd = 0

    num_list.map((v, idx) => {
        !(idx % 2) ? even += v : odd += v; 
    })

    return odd > even ? odd : even; 
    
//     let odd = [];
//     let even = [];
    
//     num_list.map((num, i) => {
//         i % 2 === 0 ? odd.push(num) : even.push(num); 
//     })
   
//     let oddSum = odd.reduce((a, v) => a + v);
//     let evenSum = even.reduce((a, v) => a+ v);
    
//     answer = oddSum > evenSum ? oddSum : evenSum;
    
//     return answer;
}