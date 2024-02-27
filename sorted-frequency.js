function sortedFrequency(arr, num) {
    let firstOcc = findFirst(arr, num);
    if (firstOcc === -1) return firstOcc;
    let lastOcc = findLast(arr, num);
    return lastOcc - firstOcc + 1;
}

function findFirst(arr, num, low = 0, high = arr.length - 1) {
    let mid = Math.floor((low + high) / 2);
    if (high >= low) {
        if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
            return mid;
        } else if (num > arr[mid]) {
            return findFirst(arr, num, mid + 1, high);
        } else {
            return findFirst(arr, num, low, mid - 1);
        }
    }
    return -1;
}

function findLast(arr, num, low = 0, high = arr.length - 1) {
    let mid = Math.floor((low + high) / 2);
    if (high >= low) {
        if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
            return mid;
        } else if (num < arr[mid]) {
            return findLast(arr, num, low, mid - 1);
        } else {
            return findLast(arr, num, mid + 1, high);
        }
    }
    return -1;
}

// module.exports = sortedFrequency