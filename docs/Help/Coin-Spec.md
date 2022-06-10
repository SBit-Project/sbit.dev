---
title: Specification
sidebar_label: Specification
---

## PUBKEY_ADDRESS / pubKeyHash
| Network  | Decimal      | Hex      | Symbol    |
|----------|--------------|----------|-----------|
| Mainnet  | 63           | 3f       | S         |
| Testnet  | 125          | 7d       | s         |
| Signet   | 125          | 7d       | s         |
| Regtest  | 122          | 7a       | r         |


## SCRIPT_ADDRESS / scriptHash
| Network | Decimal      | Hex      | Symbol         |
|---------|--------------|----------|----------------|
| Mainnet | 50           | 32       | M              |
| Testnet | 110          | 6e       | m              |
| Signet  | 110          | 6e       | m              |
| Regtest | 110          | 6e       | m              |


## SECRET_KEY / wif
| Network | Decimal      | Hex      |
|---------|--------------|----------|
| Mainnet | 128          | 80       |
| Testnet | 239          | ef       |
| Signet  | 239          | ef       |
| Regtest | 239          | ef       |


## BIP32 - bech32 - netmagic
| Network  | EXT_PUBLIC_KEY | EXT_SECRET_KEY | bech32   | netmagic |
|----------|----------------|----------------|----------|----------|
| Mainnet  | 0488B21E       | 0488ADE4       | sc       | d2b1c5a4 |
| Testnet  | 043587CF       | 04358394       | ts       | 2b335671 |
| Signet   | 043587CF       | 04358394       | ts       |          |
| Regtest  | 043587CF       | 04358394       | scrt     | acb3d41e |


## Ports
| Network | Sbit P2P | Sbit RPC |
|---------|----------|----------|
| Mainnet | 22001    | 22002    |
| Testnet | 22301    | 22302    |
| Signet  | 22201    | 22202    |
| Regtest | 22401    | 22402    |

:::tip
For ZMQ use 22501 
:::

