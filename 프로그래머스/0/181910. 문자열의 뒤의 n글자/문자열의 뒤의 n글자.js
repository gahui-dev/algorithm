function solution(my_string, n) {
    var m = my_string.length;
    
    return my_string.slice(m-n, m);
}