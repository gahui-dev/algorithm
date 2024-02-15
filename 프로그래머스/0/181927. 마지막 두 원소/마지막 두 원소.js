function solution(num_list) {
    let last = num_list.at(-1) > num_list.at(-2) ? num_list.at(-1) - num_list.at(-2) : num_list.at(-1) * 2;
    
    num_list.push(last)
    
    return num_list;
}