function solution(a, b) {
    var num1 = a + '' + b;
    var num2 = b + '' + a;
    
    var answer = num1 - num2 >= 0 ? num1 : num2
    return Number(answer);
}