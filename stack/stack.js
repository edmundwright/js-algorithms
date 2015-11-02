function Stack () {
  this.top = null;
}

function StackItem (value) {
  this.value = value;
  this.next = null;
}

Stack.prototype.pop = function () {
  if (this.isEmpty) { throw "Stack empty"; }
  var top = this.top;
  this.top = this.top.next;
  return top.value;
};

Stack.prototype.push = function (newValue) {
  var newItem = new StackItem(newValue);
  newItem.next = this.top;
  this.top = newItem;
};

Stack.prototype.isEmpty = function () {
  return this.top === null;
}

Stack.prototype.peek = function () {
  if (this.isEmpty) { throw "Stack empty"; }
  return top.value;
}
