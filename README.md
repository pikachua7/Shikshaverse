# Starting Polygon Edge Network

For Running Polygon Edge Node -

1. Installing Polygon Edge Binary

```shell
go install github.com/0xPolygon/polygon-edge@develop
```

2. Creating a Single Node for Polygon Edge Network

```shell
polygon-edge secrets init --data-dir test-chain-1
```

3. Creating genesis file (keep check of Node Id)

```shell
polygon-edge genesis --consensus ibft --ibft-validators-prefix-path test-chain- --bootnode /ip4/127.0.0.1/tcp/10001/p2p/<node_id>
```

4. Starting your Polygon Edge Node

```shell
polygon-edge server --data-dir ./test-chain-1 --chain genesis.json --grpc-address :10000 --libp2p :10001 --jsonrpc :10002 --seal
```

5. Deploying Smart Contracts on Polygon Edge network

```shell
npx hardhat run .\scripts\deployShikshaverseCollegeNFT.js --network polygon_edge
```

#
For purpose of Shikshaverse, go to polygon-edge directory

1. Install binary (Step 1)
2. Inside polygon-edge folder ,create Polygon Edge Node (Step 2)
3. Store NodeId and Public key in .secret file
4. Create genesis file (Step 3)[Make sure you type in correct nodeId]
5. Start Polygon Edge Network (Step 4) and keep it running
6. Make .env file (view .env.example file) and Import Metamask Private Key
7. In another terminal deploy the contracts (Step 5)