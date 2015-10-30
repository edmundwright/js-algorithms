# [`HashTable`](./hash-table.js)

Implemented with chaining, using singly linked lists, and dynamic resizing of the table.

## Time complexity of operations

|         | Time best case | Time worst case | Time average case |
|---------|----------------|-----------------|-------------------|
|`get`    | `O(1)`         | `O(n)`          | `O(1)`            |
|`set`    | `O(1)`         | `O(n)`          | `O(1)` (amortized)|
|`delete` | `O(1)`         | `O(n)`          | `O(1)`            |

## Memory

`O(n)`
