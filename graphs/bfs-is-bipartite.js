// Assumes graph is either undirected or fully connected

Graph.prototype.isBipartite = function () {
  var graph = this;
  var colors = new Array(this.numVertices);
  var discovered = new Array(this.numVertices);

  for (var i = 0; i < this.numVertices; i++) {
    if (!discovered[i]) {
      colors[i] = "W";
      if (!breadthFirstSearch(i)) { return false; }
    }
  }

  return true;

  function breadthFirstSearch(startVertex) {

    var queue = [startVertex], currentVertex, edge;
    discovered[i] = true;

    while (queue.length !== 0) {
      currentVertex = queue.shift();

      edge = graph.edges[currentVertex];
      while (edge) {
        if (colors[currentVertex] === colors[edge.toVertex]) { return false; }
        if (!discovered[edge.toVertex]) {
          queue.push(edge.toVertex);
          colors[edge.toVertex] = complement(colors[currentVertex]);
          discovered[edge.toVertex] = true;
        }
        edge = edge.next;
      }
    }

    return true;
  }

  function complement (color) {
    return ((color === "W") ? "B" : "W");
  }
};
