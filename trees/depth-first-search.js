function TreeNode (value) {
  this.value = value;
  this.children = [];
}

TreeNode.prototype.depthFirstSearch = function (target) {
  if (target === this.value) { return this; }

  var childResult;
  for (var i = 0; i < this.children.length; i++) {
    childResult = this.children[i].depthFirstSearch(target);
    if (childResult) {
      return childResult;
    }
  }

  return null;
};
