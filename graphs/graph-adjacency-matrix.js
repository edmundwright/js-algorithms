function Graph (numVertices, directed) {
  this.numVertices = numVertices;
  this.directed = directed;

  this.adjMatrix = new Array(numVertices);
  for (var i = 0; i < numVertices; i++) {
    this.adjMatrix[i] = new Array(numVertices);
    for (var j = 0; j < numVertices; j++) {
      this.adjMatrix[i][j] = 0;
    }
  }
}
 Graph.prototype.edgeExists = function (fromVertex, toVertex) {
   return this.adjMatrix[fromVertex][toVertex] !== 0;
 };

 Graph.prototype.addEdge = function (fromVertex, toVertex, weight) {
   if (weight === undefined) { weight = 1; }

   this.adjMatrix[fromVertex][toVertex] = weight;
   if (!this.directed) {
     this.adjMatrix[toVertex][fromVertex] = weight;
   }
 };

 Graph.prototype.removeEdge = function (fromVertex, toVertex) {
   this.adjMatrix[fromVertex][toVertex] = 0;
   if (!this.directed) {
     this.adjMatrix[toVertex][fromVertex] = 0;
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
