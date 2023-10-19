class Solution {
    public String solution(String rsp) {
        String answer = "";
        
        for(int i = 0; i < rsp.length(); i++) {
            char str = rsp.charAt(i);
            
            switch(str) {
                case '0':
                    str = '5';
                    break;
                case '2':
                    str = '0';
                    break;
                case '5' :
                    str = '2';
                    break;
            }
            
            answer += str;
        }
        
        return answer;
    }
}