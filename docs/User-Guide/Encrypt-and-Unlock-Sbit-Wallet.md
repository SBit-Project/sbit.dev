---
title: Encrypt & Unlock 
description: Encrypt & Unlock Sbit Wallet
keywords: [sbit, bitcoin, blockchain, ethereum, wallet, security]
sidebar_position: 1
---

:::caution
**After you encrypt the wallet or change your passphrase, please remember to backup your wallet again!!!**
:::

Please do all following things after you successfully installed and run a Sbit wallet: 

## Encrypt Wallet

### For command line users

sbit-cli command to encrypt wallet：

```shell
./sbit-cli encryptwallet "yourpassphrase"
```
:::danger
note that `yourpassphrase`is the user defined pass phrase, please remember it or you will lose your SBIT.
:::

After encryption, all security related actions such as sending SBIT, staking, or dumping private keys will require using the passphrase to unlock the wallet. 

### For GUI wallet users

Choose`Setting-Encrypt Wallet` in the menu.

Create a new passphrase and repeat it. The wallet will restart after encryption.

After restart, there will be a lock icon shown on the bottom of the wallet, which means it is already encrypted and locked.

## Unlock wallet

### For command line users

sbit-cli command to unlock wallet：

```shell
./sbit-cli walletpassphrase "yourpassphrase" 300
```

the first argument `yourpassphrase` is the passphrase you set for encryption, while the second is the unlock time in seconds, here 300 seconds or 5 minutes, after which time the wallet will automatically lock itself.

After unlocking, you can send SBIT or do other coin security related actions.

If you only want to unlock the wallet for staking only, please use：

```shell
./sbit-cli walletpassphrase "yourpassword" 999999 true
```

The first two arguments are the same, and the 3rd argument `true` means you only want to unlock the wallet for staking only. After doing this, you can start staking, but other coin security related actions like sending SBIT or dumping a private key still requre the passphrase to fully unlock your wallet. 

### For GUI wallet users

To fully unlock your wallet, go to “Settings - Unlock wallet”：

and enter the passphrase to unlock wallet. If you choose `For staking only`, it means you only unlock the wallet for staking，but other coin security related actions like sending SBIT or dumping a private key are still locked. So please unselect `For staking only` if you want to fully unlock your wallet. To unlock for staking only, you will also need to switch on the Staking button to activate staking.

To unlock the wallet for staking only, use the main menu Stake option to show the Staking Page. Click the Staking button to the right and enter the passphrase (leave the checkbox set to "For staking only"):

:::note
For staking wallets, if you unlock for staking only using "Settings - Unlock wallet", you will still need to select the main menu Stake option to **visit Stake Page, and click the Staking button to the right to activate staking**. 
:::

After unlocking for staking only, the lock icon will show the hasp slightly opened.

## Change passphrase

### For command line users

command for change passphrase:

```
./sbit-cli walletpassphrasechange "oldpassphrase" "newpassphrase"
```

`oldpassphrase` is the current passphrase previously set，and `newpassphrase` is the new passphrase you want set.

### For GUI wallet users

Go to “Setting - Change Passphrase” to change the passphrase.

enter old passphrase and new one to complete modification.
