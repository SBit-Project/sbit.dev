---
title: SBIT Docker Container
description: SBIT Docker Container
keywords: [sbit, bitcoin, blockchain, ethereum, docker, network]
sidebar_position: 1
---

For this book we have built a docker image to gaurantee a consistent environment, so it's easier to follow the examples. The docker container includes `sbitd`, as well as all the tools you'll need for the rest of this book.

Download the latest container image:

```shell
docker pull sbitproject/sbitportal:latest
```

## Running regtest Mode

For development and testing purposes it is most convenient to run a local blockchain, so the transactions you make are processed cheaply on your own computer. You can run a local blockchain easily using `sbitd`'s builtin `regtest` mode (short for "regression test").

`regtest` is similar to Ethereum's `testrpc`, but different in a few ways:

+ The blockchain state is stored on disk, and persists across sbitd restarts.
+ The blocks are not mined immediately, but at a semi-regular intervals.
+ Need to manually seed the chain with 600 blocks.

By default, the `sbitproject/sbitportal` docker image will start `sbitd` in `regtest` mode:

```shell
docker run -it --rm \
  --name myapp \
  -v `pwd`:/dapp \
  -p 9899:9899 \
  -p 9888:9888 \
  -p 22002:22002 \
  sbitproject/sbitportal
```

+ `--name` Name of the container. You can change this to whatever.
+ `-it` Allocates a terminal device for the container.
+ `--rm` Remove the container immediately after exit.
+ `-v` Maps the current directory as `/dapp` inside the container.
+ `-p` Expose container ports for access from the host OS.

You should see output like this:

```log
02:46:17 portal | Starting portal on port 5001
02:46:17  sbitd | Starting sbitd on port 5000
02:46:17 portal | time="2017-12-13T02:46:17Z" level=info msg="DApp service listening 0.0.0.0:9888"
02:46:17 portal | time="2017-12-13T02:46:17Z" level=info msg="Auth service listening 0.0.0.0:9899"
02:46:17  sbitd | 2017-12-13 02:46:17
02:46:17  sbitd | 2017-12-13 02:46:17 Sbit version v0.14.10.0-101922f-dirty
02:46:17  sbitd | 2017-12-13 02:46:17 InitParameterInteraction: parameter interaction: -whitelistforcerelay=1 -> setting -whitelistrelay=1
02:46:17  sbitd | 2017-12-13 02:46:17 Validating signatures for all blocks.
02:46:17  sbitd | 2017-12-13 02:46:17
02:46:17  sbitd | 2017-12-13 02:46:17 Default data directory /root/.sbit
02:46:17  sbitd | 2017-12-13 02:46:17 Using data directory /dapp/.sbit/regtest
...
02:46:22  sbitd | 2017-12-13 02:46:22 ERROR: Read: Failed to open file /dapp/.sbit/regtest/banlist.dat
02:46:22  sbitd | 2017-12-13 02:46:22 Invalid or missing banlist.dat; recreating
02:46:22  sbitd | 2017-12-13 02:46:22 init message: Starting network threads...
02:46:22  sbitd | 2017-12-13 02:46:22 net thread start
02:46:22  sbitd | 2017-12-13 02:46:22 addcon thread start
02:46:22  sbitd | 2017-12-13 02:46:22 init message: Done loading
02:46:22  sbitd | 2017-12-13 02:46:22 opencon thread start
02:46:22  sbitd | 2017-12-13 02:46:22 msghand thread start
02:46:22  sbitd | 2017-12-13 02:46:22 dnsseed thread start
02:46:22  sbitd | 2017-12-13 02:46:22 Loading addresses from DNS seeds (could take a while)
02:46:22  sbitd | 2017-12-13 02:46:22 0 addresses found from DNS seeds
02:46:22  sbitd | 2017-12-13 02:46:22 dnsseed thread exit
```

To terminate the container, hit `ctrl-c` in the terminal, and you should see some more cleanup logs:

```log
02:48:06  sbitd | 2017-12-13 02:48:06 tor: Thread interrupt
02:48:06  sbitd | 2017-12-13 02:48:06 torcontrol thread exit
02:48:06  sbitd | 2017-12-13 02:48:06 addcon thread exit
02:48:06  sbitd | 2017-12-13 02:48:06 opencon thread exit
02:48:06  sbitd | 2017-12-13 02:48:06 scheduler thread interrupt
02:48:06  sbitd | 2017-12-13 02:48:06 Shutdown: In progress...
02:48:06  sbitd | 2017-12-13 02:48:06 msghand thread exit
02:48:06  sbitd | 2017-12-13 02:48:06 net thread exit
02:48:06  sbitd | 2017-12-13 02:48:06 Dumped mempool: 0.001657s to copy, 0.00729s to dump
02:48:06  sbitd | 2017-12-13 02:48:06 ...  02:48:06.292|  Closing state DB
02:48:06  sbitd | 2017-12-13 02:48:06 ...  02:48:06.306|  Closing state DB
02:48:06  sbitd | 2017-12-13 02:48:06 Shutdown: done
02:48:06  sbitd | Terminating sbitd
```

You should see that the blockchain database for `regtest` had been created in your local project directory at the path `.sbit/regtest`:

```shell
ls .sbit/regtest

banlist.dat       chainstate        debug.log         mempool.dat       stateSbit         wallet.dat
blocks            db.log            fee_estimates.dat peers.dat         vm.log
```

Let's restart the container, and `sbitd` should reuse the blockchain database saved in `.sbit`.

```shell
docker run -it --rm \
  --name myapp \
  -v `pwd`:/dapp \
  -p 9899:9899 \
  -p 9888:9888 \
  -p 22002:22002 \
  sbitproject/sbitportal
```

#### Running Testnet

You can run on the test network by setting the SBIT_NETWORK environment variable inside the container, like so:

```shell
docker run -it --rm \
  --name myapp \
  -e "SBIT_NETWORK=testnet" \
  -v `pwd`:/dapp \
  -p 9899:9899 \
  -p 9888:9888 \
  -p 22002:22002 \
  -p 22301:22301 \
  sbitproject/sbitportal
```

## Shell Access Into The Container

Let's verify that the container is running:

```shell
docker ps
```

```shell
CONTAINER ID            IMAGE               COMMAND                  CREATED              STATUS              PORTS                                                                      NAMES
72d7b2c22f97        sbitproject/sbitportal   "/bin/sh -c 'mkdir..."   About a minute ago   Up About a minute   0.0.0.0:9888->9888/tcp, 0.0.0.0:9899->9899/tcp, 0.0.0.0:22302->22302/tcp   myapp
```

The container's name is `myapp`. We can gain shell access:

```shell
docker exec -it myapp sh
```

The `/dapp` directory inside the container should be the same as your project directory.

Inside the container, we can use the `scli` command to interact with sbitd. To get some basic info about the blockchain state:

```json
scli getinfo

{
  "version": 141000,
  "protocolversion": 70016,
  "walletversion": 130000,
  "balance": 0.00000000,
  "stake": 0.00000000,
  "blocks": 0,
  "timeoffset": 0,
  "connections": 0,
  "proxy": "",
  "difficulty": {
    "proof-of-work": 4.656542373906925e-10,
    "proof-of-stake": 4.656542373906925e-10
  },
  "testnet": false,
  "moneysupply": 0,
  "keypoololdest": 1513133181,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00400000,
  "errors": ""
}
```

# New Blocks On Demand

The chain is initially empty. As we have seen in `getinfo`, there is no block yet:

```json
"blocks": 0
```

Furthermore, your initial wallet balance is 0:

```shell
scli getbalance

0.00000000
```

In `regtest` mode, you are allowed to mine new blocks for testing purposes. This is useful in two ways:

1. Generate enough balance to pay for transactions.
2. To confirm transactions quickly instead of waiting for a new block to be mined.

Let's seed the chain with 600 blocks:

```shell
scli generate 600
```

```json
[
  // more ...
  "43e9c190679a4d040d07c6d0d5d34c1d49f7b6b6539ceb87eea76af3ef39eed5",
  "7d5b6a0e5e76cf18e35ac18d4534155a0fd96201feaefc720118452dd50bcd5b",
  "70013fa6e01ad527e1f71033ebf59c5233877fcd0fd8233ea032ddaface3cbbc",
  "6c73fe21f7c7874b550e190dcc69320c13a96f188bfb89ab858bc42adc0a1398",
  "5b48289b22fbf073f6a345d97968c3b8ee44381e8e10e6f940d31b7355684968",
  "4f9444d8bd3ece4f6839d7bcfc7f964e95187e2868128681b7bc4cb42d719b41"
]
```

Now your balance is non-zero:

```shell
scli getbalance

2000000.00000000
```

And number of blocks is about 600ish:

```shell
scli getinfo

"blocks": 603,
```

:::note
> SBIT's proof-of-stake reward is unspendable until it "matures" after 500 blocks. By generating 600 blocks, we get 100 matured block rewards, of 20k SBIT each.
:::

# Summary

In this chapter we have run sbitd in a docker container:

```shell
docker run -it --rm \
  --name myapp \
  -v `pwd`:/dapp \
  -p 9899:9899 \
  -p 9888:9888 \
  -p 22002:22002 \
  sbitproject/sbitportal
```

To shell into the container:

```shell
docker exec -it myapp sh
```

Once inside the container, use `scli` to interact with sbitd, for example:

```shell
scli getinfo
```

For a list of available `scli` commands and arguments:

```shell
scli help
```

```json
... more
listsinceblock ( "blockhash" target_confirmations include_watchonly)
listtransactions ( "account" count skip include_watchonly)
listunspent ( minconf maxconf  ["addresses",...] [include_unsafe] )
lockunspent unlock ([{"txid":"txid","vout":n},...])
move "fromaccount" "toaccount" amount ( minconf "comment" )
removeprunedfunds "txid"
reservebalance [<reserve> [amount]]
sendfrom "fromaccount" "toaddress" amount ( minconf "comment" "comment_to" )
sendmany "fromaccount" {"address":amount,...} ( minconf "comment" ["address",...] )
sendmanywithdupes "fromaccount" {"address":amount,...} ( minconf "comment" ["address",...] )
sendtoaddress "address" amount ( "comment" "comment_to" subtractfeefromamount )
sendtocontract "contractaddress" "data" (amount gaslimit gasprice senderaddress broadcast)
setaccount "address" "account"
settxfee amount
signmessage "address" "message"
```
