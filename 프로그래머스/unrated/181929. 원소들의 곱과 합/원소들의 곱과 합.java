class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        int multiply = 1;
        int sum = 0;
        
        for(int num : num_list) {
            multiply *= num;
            sum += num;
        }
        
        answer = multiply < sum * sum ? 1: 0;
        return answer;
    }
}