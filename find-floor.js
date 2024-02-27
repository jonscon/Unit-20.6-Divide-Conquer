function findFloor(arr, num, start = 0, end = arr.length - 1) {
    if (num < arr[start]) return -1;
    if (end >= start) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] <= num && (arr[mid + 1] > num || mid === arr.length - 1)) return arr[mid];
        if (arr[mid] <= num) {
            return findFloor(arr, num, mid + 1, end);
        } else {
            return findFloor(arr, num, start, mid - 1);
        }
    }
}

// module.exports = findFloor