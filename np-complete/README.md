# NP-complete problems

#### P
Solvable in polynomial time.
#### NP
Verifiable in polynomial time.
#### NP-hard
Informally: at least as hard as the hardest problems in NP.
#### NP-complete
In NP and in NP-hard. So is verifiable in polynomial time, but is at least as hard as hardest problems that can be solved in polynomial time.

## Traveling Salesman

### Problem
Given a graph, find a cycle tour that goes through every vertex exactly once in shortest time.

### Approximation

If graph satisfies triangle inequality (never faster to go via another vertex), then:

Build minimum spanning tree, traverse using depth-first search, but always skipping already visited vertices.

This tour is (weakly) less than twice the length of the optimal tour, as length of minimum spanning tree is lower bound on optimal length, and DFS covers each edge in minimum spanning tree twice.

### Special case
If graph is unweighted, or there are only two possible weights a edge can have, reduces to finding Hamiltonian cycle.

## Hamiltonian cycle

Given a graph, find tour that visits every vertex in graph exactly once, using only edges in the graph.

## Satisfiability

Given a Boolean formula, is there way of assigning true or false to each variable such that the formula is true.

## Knapsack

Given a set of items, each with a weight and value, and a knapsack with a fixed weight capacity, is there a subset worth at least X that will fit in the knapsack?
