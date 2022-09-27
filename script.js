function fibIter(num) {
    const arr = [0, 1]
    for (let i = 0; i < num - 2; i++) {
        arr.push(arr[i] + arr[i+1])
    }
    return arr;
}

console.log(fibIter(8));