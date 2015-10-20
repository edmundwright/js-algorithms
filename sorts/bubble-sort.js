var bubbleSort = function (arr) {
  var swapOccured = true;

  var i, temp;
  while (swapOccured) {
    swapOccured = false;

    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapOccured = true;
      }
    }
  }

  return arr;
};
