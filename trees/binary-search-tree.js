function BSTNode (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BSTNode.prototype.insert = function (newValue) {
  if (newValue < this.value) {
    if (this.left) {
      this.left.insert(newValue);
    } else {
      this.left = new BSTNode(newValue);
    }
  } else {
    if (this.right) {
      this.right.insert(newValue);
    } else {
      this.right = new BSTNode(newValue);
    }
  }
};

BSTNode.prototype.search = function (target) {
  var result;

  if (target === this.value) {
    result = this;
  } else if (target < this.value) {
    result = this.left && this.left.search(target);
  } else {
    result = this.right && this.right.search(target);
  }

  return result || null;
};

BSTNode.prototype.forEach = function (callback) {
  this.left && this.left.forEach(callback);
  callback(this);
  this.right && this.right.forEach(callback);
};
