---
title: How to add options
description: How to add options for Sbit node or add config file
keywords: [sbit, bitcoin, blockchain, ethereum, wallet, security]
sidebar_position: 2
---

User can specify extra options (or set configurations) for Sbit node, in order to enable/disable some specific features, other than default settings.

This tutorial describes how to specify options (or configurations) to Sbit node.

## For Sbit PC wallet（Sbit Core qt wallet）

:::note
***This works for both PC wallet and command-line sbitd wallet***
:::

Sbit PC wallet (i.e. sbit core qt wallet) is the most widely used Sbit wallet by common users.

User can edit sbit config file to specify some options.

Instructions:

### 1. Create `sbit.conf` file

Create a file named `sbit.conf` under your `datadir`, the default datadir paths for different OS are different:

* Linux: ~/.sbit
* OSX: ~/Library/Application Support/SBit
* Windows: %APPDATA%\Sbit (Please paste this path to your windows explorer, the path will be resolved automatically)

:::caution
***Please be careful and don‘t remove or change any content under this directory except you are aware of them.***
:::

:::note
The `datadir` might be manually set as well, so please create your sbit.conf under the datadir you spcified, if you did
:::

Still don't know how to create a file? You can also open this `sbit.conf` on the wallet UI directly `System Preference->OPEN CONFIGURATION FILE`

This will create and open the `sbit.conf` directly for user.

### 2. Specify the options

User can then specify any option in the file `sbit.conf` just created.

For example, to specify some rpc related settings, user might add following lines to `sbit.conf`: 

```
rpcuser=test
rpcpassword=test1234
server=1
```

This will set rpcuser to `test`, rpcpassword to `test1234`, and enable the `server` feature.

### 3. Restart wallet

It is required to RESTART the wallet after editing the `sbit.conf` file, before the options are really effective.

## For the command-line wallet `sbitd`

If your have no idea about command line, please ignore this section.

For those who are familiar with command line, you can also specify options by adding options when running `sbitd`.

For example：

```shell
./sbitd -rpcuser=test -rpcpassword=test1234 -server=1
```

These options `-rpcuser=test -rpcpassword=test1234 -server=1` realize the same configuration setting as the "Specify the options" section described.

Note that if you specify the options through `sbitd` command line, same options will be required to add to corresponding `sbit-cli` command, e.g.:

```shell
./sbit-cli -rpcuser=test -rpcpassword=test1234 getinfo
```

### Check options list by command line

You can check the complete option list with：

```shell
./sbitd -help
```



