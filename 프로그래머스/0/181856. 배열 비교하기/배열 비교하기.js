function solution(arr1, arr2) {
    let lengthArr1 = arr1.length;
    let lengthArr2 = arr2.length;
    
    if(lengthArr1 > lengthArr2) {
        return 1;
    } else if(lengthArr2 > lengthArr1) {
        return -1;
    } else {
        let sum1 = arr1.reduce((a, v) => a + v);
        let sum2 = arr2.reduce((a, v) => a + v);
        if(sum1 > sum2) {
            return 1;
        } else if(sum1 < sum2) {
            return -1;
        } else {
            return 0;
        }
    }
}