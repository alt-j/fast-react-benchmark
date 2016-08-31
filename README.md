# [React] Benchmark for [fast react server](https://github.com/alt-j/fast-react-server)

All test render list component (`./source/list.js`) with data from dataset (`./data.js`).

System configuration: Node v4.4.5, MacOS 10.9.5, processor 2GHz Intel Core i7, memory 8Gb 1600MHz DDR3.

For `ITERATION_COUNT = 100` and `CHILDREN_COUNT = 100`:
- Avarage time of React: 14ms;
- Avarage time of FastReactServer: 1ms.

For `ITERATION_COUNT = 100` and `CHILDREN_COUNT = 1000`:
- Avarage time of React: 131ms;
- Avarage time of FastReactServer: 6ms.

For `ITERATION_COUNT = 100` and `CHILDREN_COUNT = 10000`:
- Avarage time of React: 1353ms;
- Avarage time of FastReactServer: 73ms.

# Change configuration

If you want run benchmark with yours configuration:
```
npm install
npm run benchmark
```
