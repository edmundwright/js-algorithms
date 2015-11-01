// Assumes undirected graph.
// Only checks for cycle in component containing startVertex.

Graph.prototype.isCyclic = function (startVertex) {
  var graph = this;
  var discovered = new Array(this.numVertices);
  var processed = new Array(this.numVertices);
  var parent = new Array(this.numVertices);

  var backEdgeFound = false;

  dfs(startVertex);

  return backEdgeFound;

  function dfs (currentVertex) {
    if (backEdgeFound) { return; }

    discovered[currentVertex] = true;

    var edge = graph.edges[currentVertex];
    while (edge) {
      if (!discovered[edge.toVertex]) {
        parent[edge.toVertex] = currentVertex;
        dfs(edge.toVertex);
      } else if (!processed[edge.toVertex]) {
        // If toVertex is discovered but not processed, it must be an ancestor
        // of currentVertex. So the edge from currentVertex to toVertex must
        // complete a circuit, unless it's the same edge we came on.
        if (parent[currentVertex] !== edge.toVertex) {
          backEdgeFound = true;
        }
      }
      edge = edge.next;
    }

    processed[currentVertex] = true;
  }
};
