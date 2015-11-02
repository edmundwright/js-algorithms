function Queue () {
  this.first = null;
  this.last = null;
}

function QueueItem (value) {
  this.value = value;
  this.next = null;
}

Queue.prototype.dequeue = function () {
  if (this.isEmpty) { throw "Queue empty"; }

  var first = this.first;

  if (this.first === this.last) {
    this.first = this.last = null;
  } else {
    this.first = this.first.next;
  }

  return first.value;
};

Queue.prototype.enqueue = function (newValue) {
  var newItem = new QueueItem(newValue);

  if (this.last) { this.last.next = newItem; }
  if (!this.first) {this.first = newItem; }

  this.last = newItem;
};

Queue.prototype.isEmpty = function () {
  return this.first === null;
}

Queue.prototype.peek = function () {
  if (this.isEmpty) { throw "Queue empty"; }
  return first.value;
}
