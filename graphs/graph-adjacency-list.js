function Graph (numVertices, directed) {
  this.numVertices = numVertices;
  this.directed = directed;

  this.edges = new Array(numVertices);
  for (var i = 0; i < numVertices; i ++) {
    this.edges[i] = null;
  }
}

function Edge (toVertex, weight) {
  this.toVertex = toVertex;
  this.weight = weight;
  this.next = null;
}

Graph.prototype.edgeExists = function (fromVertex, toVertex) {
  var edge = this.edges[fromVertex];
  while (edge) {
    if (edge.toVertex === toVertex) { return true; }
    edge = edge.next;
  }

  return false;
};

GraphNode.prototype.addEdge = function (fromVertex, toVertex, weight, directed) {
  var edge = new Edge(toVertex, weight || 1);
  edge.next = this.edges[fromVertex];
  this.edges[fromVertex] = edge;

  if (!this.directed && !directed) {
    this.addEdge(toVertex, fromVertex, weight || 1, true);
  }
};

Graph.prototype.removeEdge = function (fromVertex, toVertex, directed) {
  var edge = this.edges[fromVertex];

  if (edge.toVertex === toVertex) {
    this.edges[fromVertex] = edge.next;
  } else {
    while (edge.next) {
      if (edge.next.toVertex === toVertex) {
        edge.next = edge.next.next;
      } else {
        edge = edge.next;
      }
    }
  }

  if (!this.directed && !directed) {
    this.removeEdge(toVertex, fromVertex, true);
  }
};
