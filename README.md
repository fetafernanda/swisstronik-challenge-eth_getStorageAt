# LearnWeb3DAO <> Swisstronik Challenge
Make a JSON RPC call using eth_getStorageAt() to get the first storage variable (slot #0) of any deployed smart contract and explain what is the retrieved value or if there is any difference with other blockchains when using this RPC method.

# Installation

COPY .ENV.EXAMPLE TO .ENV AND CHANGE THE FILE TO THE `PRIVATE_KEY` SECTION, THEN ENTER YOUR `PRIVATE_KEY`.
```
# PRIVATE KEY
PRIVATE_KEY="0x ...."

# NETWORK RPC
SWISSTRONIK= "https://json-rpc.testnet.swisstronik.com/"
ETHEREUM_SEPOLIA= "https://ethereum-sepolia.blockpi.network/v1/rpc/public"
POLYGON_MUMBAI= "https://rpc.ankr.com/polygon_mumbai"
```

AND RUN THIS ON TERMINAL
```
npm install
```

# Usage
Run:
```
npx hardhat run scripts/getStorageAt.ts
```
Default Network is Swisstronik

Result:
```
Contract Address        : 0xf84Df872D385997aBc28E3f07A2E3cd707c9698a
Slot #Number            : #0
Network RPC             : https://json-rpc.testnet.swisstronik.com/
Response Slot Number #0 : 0x0xc73e7f645a2bf1365a0903afa03a2cb5029ba989df7844b0fe7751b1ba918ea4
```

___
If you want to change the network, you can do it like this.

`Sepolia Network`
```
npx hardhat run scripts/getStorageAt.ts --network sepolia
```

`Mumbai Network`
```
npx hardhat run scripts/getStorageAt.ts --network mumbai
```

# Description
```
Smart Contract: 0xf84Df872D385997aBc28E3f07A2E3cd707c9698a
```