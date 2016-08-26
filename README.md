# [React] Benchmark for server rendering

All test render list component (`./source/list.js`) with data from dataset (`./data.js`).

For `ITERATION_COUNT = 100` and `CHILDREN_COUNT = 100`:
- Avarage time of React: 17ms;
- Avarage time of ReactServerRendering: 2ms.

For `ITERATION_COUNT = 100` and `CHILDREN_COUNT = 1000`:
- Avarage time of React: 132ms;
- Avarage time of ReactServerRendering: 18ms.

For `ITERATION_COUNT = 100` and `CHILDREN_COUNT = 10000`:
- Avarage time of React: 1352ms;
- Avarage time of ReactServerRendering: 194ms.

# Change configuration

If you want run benchmark with yours configuration:
```
npm install
npm run benchmark
```
