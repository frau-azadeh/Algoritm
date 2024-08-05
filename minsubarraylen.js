function minSubArrayLen(arr, num) {
    let minLength = Infinity;
    let start = 0;
    let end = 0;
    let sum = 0;

    while (end < arr.length) {
        sum += arr[end];

        while (sum >= num) {
            minLength = Math.min(minLength, end - start + 1);
            sum -= arr[start];
            start++;
        }
        end++;
    }

    return minLength === Infinity ? 0 : minLength;
}
