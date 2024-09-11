# All the sorting algorithm as per best to worst time complexity

## But Why?

> agar question mein use karne ho ya jarurat pade to tab use karne ke liye.

1. Radix Sort - O(kn), where k is the maximum number of digits in the input elements
2. Merge Sort - O(n log n)
3. Heap Sort - O(n log n)
4. Quick Sort - O(n^2) worst case, O(n log n) average case
5. Shell Sort - O(n^2) worst case, but better than comparison-based sorting in practice
6. Insertion Sort - O(n^2)
7. Selection Sort - O(n^2)
8. Bubble Sort - O(n^2)

- A few key points.

  - Radix sort is the fastest with a linear time complexity of O(kn), but it has restrictions on the input data.
  - Merge sort, heap sort, and quick sort have the best worst-case complexities among the comparison-based sorting algorithms at O(n log n).
  - Quick sort is very efficient on average, with O(n log n) time, but has a pathological worst case of O(n^2) when the input is already sorted or reverse sorted.
  - Shell sort, insertion sort, selection sort and bubble sort all have quadratic O(n^2) worst-case complexities, but shell sort can perform better than comparison-based sorts in practice.

So in summary, radix sort is the fastest overall, followed by the divide-and-conquer algorithms merge sort and heap sort, then quick sort, and finally the simple quadratic sorts. The best choice depends on the specific input data and constraints of the problem.
