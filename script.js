const cache = {
    '0': 0,
    '1': 1
}

function fibRec(num) {
    if (num in cache) return cache[num];
    else {
        cache[num] = fibRec(num - 1) + fibRec(num - 2);
        return cache[num];
    }
}

console.log(fibRec(10));
console.log(cache);
