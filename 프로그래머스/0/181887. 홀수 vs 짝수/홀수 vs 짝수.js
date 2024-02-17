function solution(num_list) {
    var answer = 0;
    let odd = [];
    let even = [];
    
    num_list.map((num, i) => {
        i % 2 === 0 ? odd.push(num) : even.push(num); 
    })
   
    let oddSum = odd.reduce((a, v) => a + v);
    let evenSum = even.reduce((a, v) => a+ v);
    
    answer = oddSum > evenSum ? oddSum : evenSum;
    
    return answer;
}