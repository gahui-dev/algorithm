class Solution {
    public String solution(String rny_string) {
        String answer = "";
        
        // for(int i = 0; i <= rny_string.length() - 1; i++) {
        //     if(rny_string.charAt(i) == 'm') {
        //         answer += "rn";
        //     } else {
        //         answer += rny_string.charAt(i);
        //     }
        // }
        
        answer = rny_string.replaceAll("m", "rn");
        return answer;
    }
}