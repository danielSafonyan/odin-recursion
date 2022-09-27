function fibIter(num) {
    const arr = [0, 1]
    for (let i = 0; i < num - 1; i++) {
        arr.push(arr[i] + arr[i+1])
    }
    return arr;
}

function fibRec(num) {
    if (num < 2) return num;
    else return fibRec(num - 1) + fibRec(num - 2)
}
