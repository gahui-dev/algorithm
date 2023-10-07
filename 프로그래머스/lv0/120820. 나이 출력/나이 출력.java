class Solution {
    public int solution(int age) {
        int answer = 0;
        boolean var = age > 0 && age <= 120;
        
        if(var) {
            int year = 2022;
            answer = year - age + 1;
        }
        return answer;
    }
}