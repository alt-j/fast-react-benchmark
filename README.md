# [React] Benchmark for server rendering

All test render list component (`./source/list.js`) with data from dataset (`./data.js`).

For `ITERATION_COUNT = 100` and `CHILDREN_COUNT = 100`:
- Avarage time of React: 12ms;
- Avarage time of ReactServerRendering: 1ms.

For `ITERATION_COUNT = 100` and `CHILDREN_COUNT = 1000`:
- Avarage time of React: 126ms;
- Avarage time of ReactServerRendering: 10ms.

For `ITERATION_COUNT = 100` and `CHILDREN_COUNT = 10000`:
- Avarage time of React: 1213ms;
- Avarage time of ReactServerRendering: 115ms.

# Change configuration

If you want run benchmark with yours configuration:
```
npm install
npm run benchmark
```
