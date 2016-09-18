# [React] Benchmark for [fast react server](https://github.com/alt-j/fast-react-server)

| Render Tech \ Children count | 100 | 1000 | 10000 |
--- | --- | --- | ---
| FastReactServer + FastReactRender | 1ms | 9ms | 100ms  |
| React + FastReactRender | 3ms | 30ms | 380ms |
| React + ReactDOMServer  | 12ms | 120ms | 1246ms |

System configuration: Node v4.4.5, MacOS 10.9.5, processor 2GHz Intel Core i7, memory 8Gb 1600MHz DDR3.

Each test was render list component (`./source/list.js`) with data from dataset (`./data.js`).

# Change configuration

If you want run benchmark with yours configuration:

```sh
npm install
npm run benchmark
```

Also you can set your own count of children. You should use for this environment variables:

- `CHILDREN_COUNT` - children count of list (ex. `CHILDREN_COUNT=10 npm run benchmark`)
