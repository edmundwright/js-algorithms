function Graph (numVertices, directed) {
  this.directed = directed || false;
  this.numVertices = numVertices;

  this.adjMatrix = new Array(numVertices);
  for (var i = 0; i < numVertices; i++) {
    this.adjMatrix[i] = new Array(numVertices);
    for (var j = 0; j < numVertices; j++) {
      this.adjMatrix[i][j] = 0;
    }
  }
}
 Graph.prototype.edgeExists = function (vertex1, vertex2) {
   return this.adjMatrix[vertex1][vertex2] !== 0;
 };

 Graph.prototype.addEdge = function (vertex1, vertex2, weight) {
   if (weight === undefined) { weight = 1; }

   this.adjMatrix[vertex1][vertex2] = weight;
   if (!directed) {
     this.adjMatrix[vertex2][vertex1] = weight;
   }
 };

 Graph.prototype.removeEdge = function (vertex1, vertex2) {
   this.adjMatrix[vertex1][vertex2] = 0;
   if (!directed) {
     this.adjMatrix[vertex2][vertex1] = 0;
   }
 };

 Graph.prototype.inEdges = function (vertex) {
   var result = [];

   for (var i; i < this.numVertices; i++) {
     if (this.adjMatrix[i][vertex] !== 0) { result.push(i); }
   }

   return result;
 };

 Graph.prototype.outEdges = function (vertex) {
   var result = [];

   for (var i; i < this.numVertices; i++) {
     if (this.adjMatrix[vertex][i] !== 0) { result.push(i); }
   }

   return result;
 };
