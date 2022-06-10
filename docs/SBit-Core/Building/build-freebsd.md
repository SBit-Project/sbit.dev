---
title: FreeBSD Build guide
description: This guide describes how to build sbitd and command-line utilities on FreeBSD.
keywords: [sbit, bitcoin, blockchain, ethereum]
sidebar_position: 1
---

:::tip
Tested on FreeBSD 12.0
:::

This guide describes how to build sbitd and command-line utilities on FreeBSD.

This guide does not contain instructions for building the GUI.

## Preparation

You will need the following dependencies, which can be installed as root via pkg:

```bash
pkg install autoconf automake boost-libs git gmake libevent libtool pkgconf gmp

git clone https://github.com/SBit-Project/sbit --recursive
```

In order to run the test suite (recommended), you will need to have Python 3 installed:

```bash
pkg install python3
```

See [Dependencies](dependencies) for a complete overview.

### Building BerkeleyDB

BerkeleyDB is only necessary for the wallet functionality. To skip this, pass
`--disable-wallet` to `./configure` and skip to the next section.

```bash
./contrib/install_db4.sh `pwd`
export BDB_PREFIX="$PWD/db4"
```

## Building Sbit Core

:::caution
Use `gmake` (the non-GNU `make` will exit with an error).
:::

With wallet:

```bash
./autogen.sh
./configure --with-gui=no \
    BDB_LIBS="-L${BDB_PREFIX}/lib -ldb_cxx-4.8" \
    BDB_CFLAGS="-I${BDB_PREFIX}/include" \
    MAKE=gmake
```

Without wallet:

``` bash
./autogen.sh
./configure --with-gui=no --disable-wallet MAKE=gmake
```

followed by:

``` bash
gmake # use -jX here for parallelism
gmake check # Run tests if Python 3 is available
```