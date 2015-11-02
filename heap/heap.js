function Heap (initialValues) {
  if (initialValues === undefined) {
    this.size = 0;
    this.contents = [];
    return;
  }

  this.size = initialValues.length;
  this.contents = new Array(this.size);
  for (var i = 0; i < this.size; i++) { this.contents[i] = initialValues[i]; }

  for (var i = this.size - 1; i >= 0; i--) {
    this._bubbleDown(i);
  }
}

Heap.prototype.min = function () {
  if (this.size === 0) { throw "Heap is empty"; }
  return this.contents[0];
};

Heap.prototype.insert = function (newValue) {
  this.contents[this.size] = newValue;
  this._bubbleUp(this.size);
  this.size++;
};

Heap.prototype.extractMin = function () {
  if (this.size === 0) { throw "Heap is empty"; }

  var min = this.contents[0];

  this.contents[0] = this.contents[this.size - 1];
  this.size--;
  this._bubbleDown(0);

  return min;
};

Heap.prototype._bubbleUp = function (idx) {
  var parent = this._parent(idx);

  if (parent === -1) { return; }

  if (this.contents[parent] > this.contents[idx]) {
    this._swap(parent, idx);
    this._bubbleUp(parent);
  }
};

Heap.prototype._bubbleDown = function (idx) {
  var left = this._left(idx), right = this._right(idx);
  var minIdx = idx;

  if (left !== -1 && this.contents[left] < this.contents[minIdx]) {
    minIdx = left;
  }
  if (right !== -1 && this.contents[right] < this.contents[minIdx]) {
    minIdx = right;
  }

  if (minIdx !== idx) {
    this._swap(idx, minIdx);
    this._bubbleDown(minIdx);
  }
};

Heap.prototype._swap = function (idx1, idx2) {
  var temp = this.contents[idx1];
  this.contents[idx1] = this.contents[idx2];
  this.contents[idx2] = temp;
};

Heap.prototype._parent = function (idx) {
  if (idx === 0) {
    return -1;
  } else {
    return Math.floor(idx / 2);
  }
};

Heap.prototype._left = function (idx) {
  if (2 * idx >= this.size) {
    return -1;
  } else {
    return 2 * idx;
  }
};

Heap.prototype._right = function (idx) {
  if ((2 * idx) + 1 >= this.size) {
    return -1;
  } else {
    return (2 * idx) + 1;
  }
};
