---
title: Blockchain API
description: SBit Explorer Blockchain API
keywords: [sbit, api, explorer, tools]
---

- [Blockchain API](#Blockchain-API)
  - [Blockchain Information](#Blockchain-Information)
  - [Supply](#Supply)
  - [Total Max Supply](#Total-Max-Supply)


## Blockchain Information

**Request**
```
GET /info
```

**Response**
```json
{
  "height": 29245,
  "supply": 100603852,
  "circulatingSupply": 95853844,
  "netStakeWeight": 1095728543244388,
  "feeRate": 0.00401787,
  "dgpInfo": {
    "maxBlockSize": 2000000,
    "minGasPrice": 40,
    "blockGasLimit": 40000000
  }
}
```


## Supply

**Request**
```
GET /supply
```

**Response**
```json
100603852
```


## Total Max Supply

**Request**
```
GET /total-max-supply
```

**Response**
```json
101603852.25
```
