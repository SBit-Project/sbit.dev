---
title: Sbit Staking
description: Sbit Staking（PoS mining）Tutorial
keywords: [sbit, bitcoin, blockchain, ethereum, wallet, security]
sidebar_position: 4
---

Sbit employs PoS (Proof of Stake) consensus mechanism, which is different from Bitcoin's PoW (Proof of Work). The mining process in PoS system is called staking. The block producer will get 1 SBIT, as well as the transaction fees and gases as block reward. So the real reward is usually more than 1 SBIT in total.

:::note
**Sbit blocks are produced in average every 32s**
:::

Basic requirements for staking：

1. Run a Sbit fullnode, and keep online (Since Sbit is using PoS, we don't need any mining machine, just PC or even Raspberry Pi can run a fullnode);
2. Have some SBIT in the wallet (fullnode)（Any amount of SBIT can be used for staking, more SBIT means higher possibility to stake).

If you have no SBIT yet, please get some from market before you doing following staking settings.

Currently, Sbit Core wallet is the only wallet that support Sbit PoS staking. Note that other wallets like mobile wallet and Sbit Electrum are not able to stake for the time being.

Two ways to stake:

* Method 1：Staking with sbitd, using command line, suitable for Linux/OSX/Windows/Raspberry Pi users who are familiar with command line tools.
* Method 2：Staking with `sbit-qt` wallet, with GUI, suitable for common users.

Either way works in the same way for staking, so you can choose either method you like.

## Method 1：Staking with `sbitd` ( Command Line )

### 1. Run `sbitd`

Run `sbitd`

```shell
./sbitd -daemon
```

Staking is default on for sbitd, so no need for other options if you only want to stake.

### 2. Send some SBIT to your wallet

First you can generate a new address with：

```shell
./sbit-cli getnewaddress
```

This will generate a new address with Prefix 'S'. You can send some SBIT to this new generated address for staking. You can generate as many addresses as you like, and send arbitrary SBIT as you like for staking.

:::note
**The coin should wait for 2000 blocks before being able to stake, i.e. about 17 hours to MATURE.**. 
:::


After the Sbit node syncing to the latest block, you can check current balance with `./sbit-cli getbalance` or get utxo list with`./sbit-cli listunspent`.

Please do following steps after your coin is mature.

### 3. Check staking info

Check current staking info with：

```shell
./sbit-cli getstakinginfo
```

You might get the result like this：

```json
{
  "enabled": true,
  "staking": true,
  "errors": "",
  "currentblocksize": 1000,
  "currentblocktx": 0,
  "pooledtx": 5,
  "difficulty": 5788429.564280176,
  "search-interval": 46,
  "weight": 53206430,
  "netstakeweight": 2278172497819029,
  "expectedtime": 5480654870
}
```

`enabled` means if your wallet have enabled staking, it should be true by default. `staking` means if your wallet is currently staking (mining). `weight` stands for the amount of SBIT that is staking right now, with unit 10^-8 SBIT, here in the example, we have 0.532SBIT staking. `expectedtime` stands for the expected time that you will get a reward, the unit is second.

### 4. How to stake if the wallet is encrypted？

If your wallet is not encrypted, you can skip this section. However, for security, we recommand you encrypt your wallet.

Sbit wallet can be encrypted with `encryptwallet`. However, staking will be stopped when it is encrypted. For example, `./sbit-cli getstakinginfo` for a encrypted wallet：

```json
{
  "enabled": true,
  "staking": false,
  "errors": "",
  "currentblocksize": 1000,
  "currentblocktx": 0,
  "pooledtx": 94,
  "difficulty": 5788429.670171153,
  "search-interval": 0,
  "weight": 53206430,
  "netstakeweight": 2438496688951881,
  "expectedtime": 0
}
```

See `staking` turns to `false`, which means wallet is not staking.

You can use `walletpassphrase` to unlock wallet for staking：

```shell
./sbit-cli walletpassphrase "<your passphrase>" 99999999 true
```

The meaning of the arguments can be found in the documents "[How to encrypt?](Encrypt-and-Unlock-Sbit-Wallet)".

After unlocking, you can double check `getstakinginfo`, it should look the same with previous unlocked result, `staking` become true.

## Method 2: Staking with sbit-qt wallet (official PC wallet)

### 1. Open Sbit qt wallet

Launch the wallet.

### 2. Send some SBIT to your wallet

If you already have some SBIT in your wallet, you might skip this step.

If not, please send some SBIT to your wallet first.

:::note
**The coin should wait for 2000 blocks before being able to stake, i.e. about 17 hours to MATURE.**. 
:::

### 3. Check staking status

The flash sign at the bottom of wallet shows staking info

**Solid black flash means it is staking now**. For more information, you can put your mouse on the flash.

* `Staking`: if it is staking；
* `Your weight is`: How many SBIT are able to used for staking, unit is SBIT;
* `Network weight is`: How many SBIT are staking in the network, unit is SBIT；
* `Expected time`: expected time to get reward, unit is Day.

**Hollow flash measn it is not staking**

Possible reasons for not staking：

* 1.There is no coins of no mature coins (more than 2000 confirmations(blocks)) -- Solution: send some SBIT to the wallet and wait for 2000 blocks (about 17 hours);

* 2.Wallet is locked/encrypted -- Solution: unlock the wallet for staking. ([How to unlock?](Encrypt-and-Unlock-Sbit-Wallet))

**No flash sign means staking is disabled**

* 3.Staking is disabled -- Solution: enable staking in the sbit.conf (-staking=true)

## About block reward

The block producer will get more than 1 SBIT rewards, something to keep in mind:

* The reward come from a new transaction, you can check balance to see if you get the reward.
* Once succesfully stake, you will get 1 SBIT reward immediately.
* The staked coins (UTXO) will be locked for 2000 blocks, during this period, it cannot be spent nor be used to stake. 

## How to disable staking?

Staking is by default enabled for Sbit wallet. If you need to disable staking for some reason (for example exchanges are always recommanded to disable staking), you might following anyone of the 3 ways below:

1 Add `-staking=false` when running Sbit node：

```shell
./sbitd -staking=false -daemon
```

For qt wallet, it is like：

```shell
./sbit-qt -staking=false
```

2 Add config `staking=false` in sbit.conf.

3 Encrypt wallet, since encrypted wallet will automatically stop staking.