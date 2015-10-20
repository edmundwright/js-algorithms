# Sorts

|                               | Time best case | Time worst case | Time average case | Memory | Stable? | In place? |
|-------------------------------|----------------|-----------------|-------------------|--------|---------|-----------|
|[Merge sort](./merge-sort.js)  | `O(nlog(n))`   | `O(nlog(n))`    | `O(nlog(n))`      | `O(n)` | Yes     | No        |
|[Bubble sort](./bubble-sort.js)| `O(n)`         | `O(n^2)`        | `O(n^2)`          | `O(1)` | Yes     | Yes       |
|[Quicksort](./quicksort.js)    | `O(nlog(n))`   | `O(n^2)`        | `O(nlog(n))`      | `O(n)` | No      | Yes       |

### Notes
- *Stable* means that ordering of equal elements is always preserved. Not relevant when elements are just numbers.
- Quicksort would use only `O(log(n))` memory if JS did tail call optimization.
