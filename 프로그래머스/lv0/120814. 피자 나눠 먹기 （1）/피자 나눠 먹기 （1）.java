class Solution {
    public int solution(int n) {
        int answer = n / 7;
        
        if((n % 7) > 0 && (n % 7) < 7) {
            answer++;
            
        }
        
        if(n < 7) {
            answer = 1; 
        }
        return answer;
    }
}