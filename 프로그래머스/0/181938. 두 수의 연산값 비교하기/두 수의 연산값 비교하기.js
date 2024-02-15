function solution(a, b) {
    var num1 = a + '' + b;
    var num2 = 2 * a * b
    
    var answer = num1 >= num2 ? num1 : num2;
    
    return Number(answer);
}