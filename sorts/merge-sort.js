var mergeSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }

  var middleIndex = Math.floor(arr.length / 2);

  var sortedLeft = mergeSort(arr.slice(0, middleIndex));
  var sortedRight = mergeSort(arr.slice(middleIndex));

  return merge(sortedLeft, sortedRight);
};

var merge = function (arr1, arr2) {
  var merged = [];

  while (arr1.length !== 0 && arr2.length !== 0) {
    if (arr1[0] <= arr2[0]) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }

  return merged.concat(arr1).concat(arr2);
};
