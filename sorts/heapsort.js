// Uses `Heap` defined in ../heap/heap.js

function heapsort (arr) {
  var heap = new Heap(arr);

  var result = []
  for (var i = 0; i < arr.length; i++) {
    result.push(heap.extractMin());
  }
  return result;
}
