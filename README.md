# React Native FlatList Performance Issue

This repository demonstrates a performance issue with `FlatList` in React Native when rendering a large dataset (10,000 items in this example).  The app experiences significant lag and unresponsiveness.

The `bug.js` file contains the initial implementation that exhibits the performance problem.  The `bugSolution.js` file demonstrates a solution using `windowSize` and other optimizations.

## Solution

The performance issue is addressed in `bugSolution.js`.  The solution involves using the `windowSize` prop to improve the rendering efficiency of `FlatList`.