var quicksort = function (arr) {
  quicksortHelper(arr, 0, arr.length);
  return arr;
};

var quicksortHelper = function (arr, startIndex, n) {
  if (n < 2) {
    return;
  }

  var pivotIndex = startIndex + Math.floor(n / 2);
  var pivot = arr[pivotIndex];

  swapElements(arr, startIndex, pivotIndex);

  var i = startIndex + 1;
  for (var j = i; j < startIndex + n; j++) {
    if (arr[j] < pivot) {
      swapElements(arr, i, j);
      i++;
    }
  }

  swapElements(arr, i - 1, startIndex);

  quicksortHelper(arr, startIndex, i - 1 - startIndex);
  quicksortHelper(arr, i, n + startIndex - i);
};

var swapElements = function (arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};
