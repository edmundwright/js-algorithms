function TreeNode (value) {
  this.value = value;
  this.children = [];
}

TreeNode.prototype.forEach = function (callback) {
  callback(this);
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].forEach(callback);
  }
};
