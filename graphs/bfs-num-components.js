Graph.prototype.numComponents = function () {
  var graph = this;
  var discovered = new Array(this.numVertices);
  var numComponents = 0;

  for (var i =0; i < this.numVertices; i++) {
    if (!discovered[i]) {
      numComponents++;
      breadthFirstSearch(i);
    }
  }

  return numComponents;

  function breadthFirstSearch (startVertex) {
    discovered[startVertex] = true;
    var queue = [startVertex], currentVertex, edge;

    while (queue.length !== 0) {
      currentVertex = queue.shift();

      edge = graph.edges[currentVertex];
      while (edge) {
        if (!discovered[edge.toVertex]) {
          queue.push(edge.toVertex);
          discovered[edge.toVertex] = true;
        }
        edge = edge.next;
      }
    }
  }
};
