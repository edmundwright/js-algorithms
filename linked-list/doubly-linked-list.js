function LinkItem (value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

LinkItem.prototype.insertRight = function (otherItem) {
  if (this.next) {
    this.next.prev = otherItem;
    otherItem.next = this.next;
  }
  this.next = otherItem;
};

LinkItem.prototype.insertLeft = function (otherItem) {
  if (this.prev) {
    this.prev.next = otherItem;
    otherItem.prev = this.prev;
  }
  this.prev = otherItem;
};

function LinkedList () {
  this.firstItem = null;
  this.lastItem = null;
}

LinkedList.prototype.push = function (newValue) {
  if (this.lastItem) {
    this.lastItem.insertRight(new LinkItem(newValue));
    this.lastItem = this.lastItem.next;
  } else {
    this.firstItem = this.lastItem = new LinkItem(newValue);
  }
};

LinkedList.prototype.pop = function () {
  if (!this.lastItem) { throw "List is empty"; }

  var poppedValue = this.lastItem.value;

  if (this.lastItem === this.firstItem) {
    this.lastItem = this.firstItem = null;
  } else {
    this.lastItem = this.lastItem.prev;
    this.lastItem.next = null;
  }

  return poppedValue;
};

LinkedList.prototype.unshift = function (newValue) {
  this.firstItem.insertLeft(new LinkItem(newValue));
  this.firstItem = this.firstItem.prev;
};

LinkedList.prototype.shift = function () {
  var shiftedValue = this.firstItem.value;

  this.firstItem = this.firstItem.next;
  this.firstItem.prev = null;

  return shiftedValue;
};

LinkedList.prototype._itemAtIndex = function (index) {
  if (!this.firstItem) { throw "List is empty"; }

  var currentItem = this.firstItem;
  for (var i = 0; i < index; i++) {
    currentItem = currentItem.next;
    if (!currentItem) { throw "Index out of bounds"; }
  }

  return currentItem;
};

LinkedList.prototype.valueAtIndex = function (index) {
  return this._itemAtIndex(index).value;
};

LinkedList.prototype.removeAtIndex = function (index) {
  if (index === 0) { this.shift(); }

  var priorItem = this.itemAtIndex(index - 1);
  if (priorItem.next) {
    priorItem.next = priorItem.next.next;
    priorItem.next.prev = priorItem;
  } else {
    throw "Index out of bounds";
  }
};

LinkedList.prototype.insertAtIndex = function (index, newValue) {
  if (index === 0) { this.unshift(newValue); }

  var priorItem = this.itemAtIndex(index - 1);
  if (priorItem === this.lastItem) {
    this.push(newValue);
  } else {
    priorItem.insertRight(new LinkItem(newValue));
  }
};
