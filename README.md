# [React] Benchmark for [fast react server](https://github.com/alt-j/fast-react-server)

| Render Tech \ Children count | 100 | 1000 | 10000 |
--- | --- | --- | ---
| FastReactServer + FastReactRender | 1ms | 9ms | 100ms  |
| React + FastReactRender | 3ms | 30ms | 380ms |
| React + ReactDOMServer  | 12ms | 120ms | 1246ms |

System configuration: Node v0.12.15, MacOS 10.11.6, processor 2,7 GHz Intel Core i5, memory 16Gb 1867MHz DDR3.

Each test was render list component (`./source/list.js`) with data from dataset (`./data.js`).

# Change configuration

If you want run benchmark with yours configuration:

```sh
npm install
npm run benchmark
```

Also you can set your own count of children. You should use for this environment variables:

- `CHILDREN_COUNT` - children count of list (ex. `CHILDREN_COUNT=10 npm run benchmark`)
