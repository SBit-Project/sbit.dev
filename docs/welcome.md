---
title: Welcome to 
description: What is smart bitcoin blockchain ?
keywords: [sbit, bitcoin, blockchain, ethereum]
sidebar_position: 1
---

:::tip Contributions
Sbit welcomes contributions from anyone.
:::

:::tip
Currently, the Sbit is in development and would benefit from contributions in the form of writing code, user testing, documentation, and community support
:::


Branching strategy
==================

Sbit uses four branches to ensure stability without slowing down
the pace of the daily development activities.

### development
The *development* branch is used for day-to-day activities. It is the most
active branch and is where pull requests go by default. This branch may contain
code which is not yet stable or ready for production, so it should only be
executed on testnet to avoid disrupting fellow users.

### staging
When a decision has been made that the development branch should be moving
towards a final release it is merged to *staging* where no new development
takes place. This branch is purely to stabilize the code base and squash out
bugs rained down from development. This is 's beta testing phase.

### master
Once the staging branch is stable and runs smoothly, it is merged to *master*, a tag is created,
and a release is made available to the public.

### hotfix
When a bug is found in a production version and an update needs to be
released quickly, the changes go into a *hotfix* branch for testing before
being merged to *master* for release. This allows for production updates without having to merge straight to
master if the staging branch is busy.

Testing
-------

Testing and code review is the bottleneck for development;   Please be patient and help out by testing
other people's pull requests, and remember this is a security-critical project where any mistake might cost people
lots of money.

### Automated Testing

Developers are strongly encouraged to write [unit tests](https://github.com/SBit-Project/sbit/blob/master/src/test/README.md) for new code, and to
submit new unit tests for old code. Unit tests can be compiled and run
(assuming they weren't disabled in configure) with: `make check`. Further details on running
and extending unit tests can be found in [/src/test/README.md](https://github.com/SBit-Project/sbit/blob/master/src/test/README.md).

There are also [regression and integration tests](https://github.com/SBit-Project/sbit/tree/master/test), written
in Python, that are run automatically on the build server.
These tests can be run (if the [test dependencies](https://github.com/SBit-Project/sbit/tree/master/test) are installed) with: `test/functional/test_runner.py`

The Travis CI system makes sure that every pull request is built for Windows, Linux, and macOS, and that unit/sanity tests are run automatically.

## Please take some time to read the following, this is for your own safety!

:::danger Warning
DO NOT give your private keys to anyone. No one from the Sbit project will ever ask you for your private keys, only you can have access to them as they control your funds. If you give your private keys to someone else, you just gave them all your SBIT.
:::

:::danger Warning
Transactions cannot be reverted or cancelled. On a decentralized blockchain, there's no way to revert/stop transactions, please make sure to check as many times as possible that you're sending the funds to the correct address.
:::

:::caution
ALWAYS make backups, any wallet, or important data (private keys) must be backed up in a secure manner. It's up to the user to choose which backup method will be used.
:::

:::caution
Sbit is open source software, provided as-is with no warranty.
:::

:::caution
Sbit Core is considered beta software. We make no warranties or guarantees of its security or stability.
:::