import java.util.Arrays;

class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        
        Arrays.sort(numbers);
                
        int max1 = numbers[numbers.length - 1] * numbers[numbers.length - 2];
        int max2 = numbers[0] * numbers[1];
        
        if (numbers.length == 2) {
            return answer = max2;
        } 
        
        if (max2 > max1) {
            answer = max2;
        } else {
            answer = max1;
        }
        
        return answer;
    }
}