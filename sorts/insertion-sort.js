function insertionSort (arr) {
  var j, temp;

  for (var i = 1; i < arr.length; i++) {
    j = i;

    while (j > 0 && arr[j] < arr[j - 1]) {
      temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;

      j--;
    }
  }

  return arr;
}
