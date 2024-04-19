function bubbleSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Troca os elementos arr[j] e arr[j+1]
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Exemplo de uso:
var arr = [64, 25, 12, 22, 11];
console.log("Array original: " + arr);
console.log("Array ordenado: " + bubbleSort(arr));


function selectionSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        var temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// Exemplo de uso:
var arr = [64, 25, 12, 22, 11];
console.log("Array original: " + arr);
console.log("Array ordenado: " + selectionSort(arr));

function insertionSort(arr) {
    var n = arr.length;
    for (var i = 1; i < n; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Exemplo de uso:
var arr = [64, 25, 12, 22, 11];
console.log("Array original: " + arr);
console.log("Array ordenado: " + insertionSort(arr));

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var pivot = arr[0];
    var left = [];
    var right = [];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

// Exemplo de uso:
var arr = [64, 25, 12, 22, 11];
console.log("Array original: " + arr);
console.log("Array ordenado: " + quickSort(arr));
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Exemplo de uso:
var arr = [64, 25, 12, 22, 11];
console.log("Array original: " + arr);
console.log("Array ordenado: " + mergeSort(arr));
