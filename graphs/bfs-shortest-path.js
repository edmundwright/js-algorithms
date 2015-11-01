// Uses adjacency list representation found in file in same directory.
// This BFS just finds the shortest path to a target vertex, ignoring edge weight.

Graph.prototype.shortestPath = function (startVertex, targetVertex) {
  var parents = new Array(this.numVertices);
  var discovered = new Array(this.numVertices);

  discovered[startVertex] = true;
  var queue = [startVertex], currentVertex, edge;

  while (queue.length !== 0) {
    currentVertex = queue.shift();

    edge = this.edges[currentVertex];
    while (edge) {
      if (!discovered[edge.toVertex]) {
        queue.push(edge.toVertex);
        discovered[edge.toVertex] = true;
        parents[edge.toVertex] = currentVertex;
        if (edge.toVertex === targetVertex) {
          return Graph.findPath(startVertex, targetVertex, parents);
        }
      }
      edge = edge.next;
    }
  }

  return false;
};

Graph.findPath = function (startVertex, targetVertex, parents) {
  result = [];
  assemblePath(startVertex, targetVertex);
  return result;

  function assemblePath(start, end) {
    if (start === end) {
      result.push(start);
    } else {
      assemblePath(start, parents[end]);
      result.push(end);
    }
  }
};
