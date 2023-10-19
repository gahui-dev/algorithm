class Solution {
    public int[] solution(int[] numbers, String direction) {
        int[] answer = new int[numbers.length];
        int size = numbers.length;
        
        switch(direction) {
            case "right":
                for(int i = 0; i < size; i++) {
                    if(i == 0) {
                        answer[0] = numbers[size - 1];
                    } else {
                        answer[i] = numbers[i - 1];
                    }  
                }
                break;
                
            case "left":
                for(int i = 0; i < size; i++) {
                    if(i == (size - 1)) {
                        answer[size - 1] = numbers[0];
                    } else {
                        answer[i] = numbers[i + 1];
                    }
                }
                break;
        }
        
        return answer;
    }
}