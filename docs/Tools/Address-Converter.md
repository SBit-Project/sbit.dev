---
title: SBIT Address Converter
description: SBIT Address Converter
keywords: [sbit, hex, base58, golang, tools]
---

The address in bytes is `ripemd160(sha256(pubkey))`. This address could be encoded either with hex or base58.

## Demo

Install

```
go get -u github.com/SBit-Project/sbitaddr
```

Convert hex address to base58 address (test net):

```
sbitaddr --hex fe59cbc1704e89a698571413a81f0de9d8f00c69 --test
```

Convert hex address to base58 address (main net):

```
sbitaddr --hex fe59cbc1704e89a698571413a81f0de9d8f00c69
```

Convert base58 address to hex address:

```
sbitaddr --base58 sgkGMtMJbK921UZpwYt3bMhE9d7nNMyUcC
```

```
sbitaddr --base58 SjnsK9sSa8QhJbvTRYEHXapT8M9JHhSLqY
```

## Help

```shell
usage: sbitaddr [<flags>]

Flags:
      --help           Show context-sensitive help (also try --help-long and --help-man).
  -h, --hex=HEX        address to convert in hex
  -b, --base58=BASE58  address to convert in hex
  -t, --test           generate base58 address for testnet
```