function TreeNode (value) {
  this.value = value;
  this.children = [];
}

TreeNode.prototype.breadthFirstSearch = function (target) {
  var i;
  var queue = [this];

  while (queue.length !== 0) {
    var currentNode = queue.shift();

    if (currentNode.value === target) { return currentNode; }

    for (i = 0; i < currentNode.children.length; i ++) {
      queue.push(currentNode.children[i]);
    }
  }

  return null;
};
