class Solution {
    public int[] solution(int[] numbers) {
        int[] answer = new int[numbers.length];
        
        if(numbers.length >= 1 && numbers.length <= 1000) {
            for(int i = 0; i < numbers.length; i++) {
                answer[i] = numbers[i] * 2;
            }
        }
        
        return answer;
    }
}