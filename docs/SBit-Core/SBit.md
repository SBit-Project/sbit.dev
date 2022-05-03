---
title: Introduction
description: Sbit Core Building and Development
keywords: [sbit, bitcoin, blockchain, ethereum]
sidebar_position: 1
---

Sbit Core is the original Sbit client and it builds the backbone of the network. It downloads and, by default, stores the entire history of Sbit transactions.

:::caution
Sbit is still under active development, be aware that breaking changes may occur.
:::

Building
---------------------
The following are developer notes on how to build Sbit Core on your native platform. They are not complete guides, but include notes on the necessary libraries, compile flags, etc.

- [Dependencies](Building/dependencies)
- [macOS Build Notes](Building/build-osx)
- [Unix Build Notes](Building/build-unix)
- [Windows Build Notes](Building/build-windows)
- [FreeBSD Build Notes](Building/build-freebsd)
- [OpenBSD Build Notes](Building/build-openbsd)
- [NetBSD Build Notes](Building/build-netbsd)
- [Gitian Building Guide](Building/gitian-building)
- [Building Sbit Core with Visual Studio](Building/build-msvc)

Development
---------------------

- [Benchmarking](Development/benchmarking)
- [Developer Notes](Development/developer-notes)
- [Dnsseed Policy](Development/dnsseed-policy)
- [JSON-RPC Interface](Development/JSON-RPC-interface)
- [Productivity Notes](Development/productivity)
- [Release Process](Development/release-process)
- [Unauthenticated REST Interface](Development/REST-interface)
- [Shared Libraries](Development/shared-libraries)
- [SBIT Command Line Client](Development/cli)

### Miscellaneous
- [Files](Miscellaneous/files)
- [Fuzz-testing](Miscellaneous/fuzzing)
- [Init Scripts (systemd/upstart/openrc)](Miscellaneous/init)
- [PSBT support](Miscellaneous/psbt)
- [Reduce Memory](Miscellaneous/reduce-memory)
- [Reduce Traffic](Miscellaneous/reduce-traffic)
- [sbit.conf Configuration File](Miscellaneous/sbit-conf)
- [ZMQ](Miscellaneous/zmq)
- [Tor Support](Miscellaneous/tor)
