# [React] Benchmark for server rendering

All test render list component (`./source/list.js`) with data from dataset (`./data.js`).

For `ITERATION_COUNT = 10`:
- Avarage time of React: 175ms;
- Avarage time of ReactServerRendering: 71ms.

For `ITERATION_COUNT = 100`:
- Avarage time of React: 159ms;
- Avarage time of ReactServerRendering: 67ms.

For `ITERATION_COUNT = 1000`:
- Avarage time of React: 169ms;
- Avarage time of ReactServerRendering: 70ms.

# Change configuration

If you want run benchmark with yours configuration:
```
npm install
npm run benchmark
```
