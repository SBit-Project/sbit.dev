---
title: UNIX Build guide
description: Some notes on how to build Sbit Core in Unix.
keywords: [sbit, bitcoin, blockchain, ethereum]
sidebar_position: 4
---

Some notes on how to build Sbit Core in Unix.

:::note
For BSD specific instructions, see `build-*bsd.md` in this directory
:::

:::caution
Always use absolute paths to configure and compile Sbit Core and the dependencies.
For example, when specifying the path of the dependency:

```bash
	../dist/configure --enable-cxx --disable-shared --with-pic --prefix=$BDB_PREFIX
```

Here BDB_PREFIX must be an absolute path - it is defined using $(pwd) which ensures
the usage of the absolute path.
:::

To Build
---------------------

```bash
./autogen.sh
./configure
make
make install # optional
```

This will build sbit-qt as well, if the dependencies are met.

Dependencies
---------------------

These dependencies are required:

 Library     | Purpose          | Description
 ------------|------------------|----------------------
 libboost    | Utility          | Library for threading, data structures, etc
 libevent    | Networking       | OS independent asynchronous networking
 libgmp      | Math             | The GNU Multiple Precision Arithmetic Library

Optional dependencies:

 Library     | Purpose          | Description
 ------------|------------------|----------------------
 miniupnpc   | UPnP Support     | Firewall-jumping support
 libdb4.8    | Berkeley DB      | Wallet storage (only needed when wallet enabled)
 qt          | GUI              | GUI toolkit (only needed when GUI enabled)
 libqrencode | QR codes in GUI  | Optional for generating QR codes (only needed when GUI enabled)
 univalue    | Utility          | JSON parsing and encoding (bundled version will be used unless --with-system-univalue passed to configure)
 libzmq3     | ZMQ notification | Optional, allows generating ZMQ notifications (requires ZMQ version >= 4.0.0)
 sqlite3     | SQLite DB        | Optional, wallet storage (only needed when wallet enabled)

For the versions used, see [Dependencies](dependencies)

Memory Requirements
--------------------

C++ compilers are memory-hungry. It is recommended to have at least 1.5 GB of
memory available when compiling Sbit Core. On systems with less, gcc can be
tuned to conserve memory with additional CXXFLAGS:

```bash
./configure CXXFLAGS="--param ggc-min-expand=1 --param ggc-min-heapsize=32768"
```

Alternatively, or in addition, debugging information can be skipped for compilation. The default compile flags are
`-g -O2`, and can be changed with

```bash
./configure CXXFLAGS="-O2"
```

Finally, clang (often less resource hungry) can be used instead of gcc, which is used by default:

```bash
./configure CXX=clang++ CC=clang
```

## Linux Distribution Specific Instructions

### Ubuntu & Debian

#### Dependency Build Instructions

Build requirements

```bash
sudo apt-get install build-essential libtool autotools-dev automake pkg-config bsdmainutils python3 libgmp3-dev
```

Now, you can either build from self-compiled [Depends](depend) or install the required dependencies:

```bash
sudo apt-get install libevent-dev libboost-system-dev libboost-filesystem-dev libboost-test-dev libboost-thread-dev
```

BerkeleyDB is required for the wallet.

Ubuntu and Debian have their own `libdb-dev` and `libdb++-dev` packages, but these will install
BerkeleyDB 5.1 or later. This will break binary wallet compatibility with the distributed executables, which
are based on BerkeleyDB 4.8. If you do not care about wallet compatibility,
pass `--with-incompatible-bdb` to configure.

Otherwise, you can build from self-compiled `depends` (see above).

SQLite is required for the wallet

```bash
sudo apt install libsqlite3-dev
```

To build Sbit Core without wallet, see [*Disable-wallet mode*](#disable-wallet-mode)


Optional (see `--with-miniupnpc` and `--enable-upnp-default`):

```bash
sudo apt-get install libminiupnpc-dev
```

ZMQ dependencies (provides ZMQ API):

```bash
sudo apt-get install libzmq3-dev
```

GUI dependencies

If you want to build sbit-qt, make sure that the required packages for Qt development
are installed. Qt 5 is necessary to build the GUI.
To build without GUI pass `--without-gui`.

To build with Qt 5 you need the following:

```bash
sudo apt-get install libqt5gui5 libqt5core5a libqt5dbus5 qttools5-dev qttools5-dev-tools
```

libqrencode (optional) can be installed with:

```bash
sudo apt-get install libqrencode-dev
```

Once these are installed, they will be found by configure and a sbit-qt executable will be
built by default.


### Fedora

#### Dependency Build Instructions

Build requirements

```bash
sudo dnf install gcc-c++ libtool make autoconf automake libevent-devel boost-devel libdb4-devel libdb4-cxx-devel python3 gmp-devel
```

Optional (see `--with-miniupnpc` and `--enable-upnp-default`):

```bash
sudo dnf install miniupnpc-devel
```

ZMQ dependencies (provides ZMQ API)

```bash
sudo dnf install zeromq-devel
```

To build with Qt 5 you need the following

```bash
sudo dnf install qt5-qttools-devel qt5-qtbase-devel
```

libqrencode (optional) can be installed with

```bash
sudo dnf install qrencode-devel
```

SQLite can be installed with

```bash
sudo dnf install sqlite-devel
```

Dependency Build Instructions: CentOS
-------------------------------------

You need to build boost manually, and if it's not in standard library paths, you need to add `/path/to/boost/lib` into `LD_LIBRARY_PATH` env when building Sbit.

Build requirements:

```bash
sudo yum install epel-release
sudo yum install gcc-c++ libtool libdb4-cxx-devel openssl-devel libevent-devel gmp-devel
```

To build with Qt 5 (recommended) you need the following:

```bash
sudo yum install qt5-qttools-devel protobuf-devel qrencode-devel
```

:::note
The release is built with GCC and then "strip sbitd" to strip the debug
symbols, which reduces the executable size by about 90%.
:::

miniupnpc
---------

[miniupnpc](https://miniupnp.tuxfamily.org) may be used for UPnP port mapping. It can be downloaded from [here](
https://miniupnp.tuxfamily.org/files/). UPnP support is compiled in and turned off by default.  See the configure options for upnp behavior desired:

```
	--without-miniupnpc      No UPnP support miniupnp not required
	--disable-upnp-default   (the default) UPnP support turned off by default at runtime
	--enable-upnp-default    UPnP support turned on by default at runtime
```

Berkeley DB
-----------
It is recommended to use Berkeley DB 4.8. If you have to build it yourself,
you can use [the installation script included in contrib/](https://github.com/SBit-Project/sbit/contrib/install_db4.sh)
like so

```shell
./contrib/install_db4.sh `pwd`
```

from the root of the repository.

:::note
You only need Berkeley DB if the wallet is enabled (see [*Disable-wallet mode*](#disable-wallet-mode)).
:::

Boost
-----
If you need to build Boost yourself:

```bash
sudo su
./bootstrap.sh
./bjam install
```


Security
--------

To help make your Sbit Core installation more secure by making certain attacks impossible to
exploit even if a vulnerability is found, binaries are hardened by default.
This can be disabled with:

Hardening Flags:

```bash
	./configure --enable-hardening
	./configure --disable-hardening
```

Hardening enables the following features:

* Position Independent Executable: Build position independent code to take advantage of Address Space Layout Randomization
    offered by some kernels. Attackers who can cause execution of code at an arbitrary memory
    location are thwarted if they don't know where anything useful is located.
    The stack and heap are randomly located by default, but this allows the code section to be
    randomly located as well.

    On an AMD64 processor where a library was not compiled with -fPIC, this will cause an error
    such as: "relocation R_X86_64_32 against `......' can not be used when making a shared object;"

    To test that you have built PIE executable, install scanelf, part of paxutils, and use:

```bash
scanelf -e ./sbit
```

The output should contain:

```
 TYPE
ET_DYN
```

* _Non-executable Stack_: If the stack is executable then trivial stack-based buffer overflow exploits are possible if
    vulnerable buffers are found. By default, Sbit Core should be built with a non-executable stack,
    but if one of the libraries it uses asks for an executable stack or someone makes a mistake
    and uses a compiler extension which requires an executable stack, it will silently build an
    executable without the non-executable stack protection.

    To verify that the stack is non-executable after compiling use:

```bash
scanelf -e ./sbit
```

The output should contain:

```
STK/REL/PTL
RW- R-- RW-
```

The STK RW- means that the stack is readable and writeable but not executable.

Disable-wallet mode
--------------------

When the intention is to run only a P2P node without a wallet, Sbit Core may be compiled in
disable-wallet mode with:

```bash
./configure --disable-wallet
```

In this case there is no dependency on Berkeley DB 4.8 and SQLite.

Mining is also possible in disable-wallet mode using the `getblocktemplate` RPC call.

Additional Configure Flags
--------------------------
A list of additional configure flags can be displayed with:

```bash
./configure --help
```

Setup and Build Example: Arch Linux
-----------------------------------

This example lists the steps necessary to setup and build a command line only, non-wallet distribution of the latest changes on Arch Linux:

```bash
    pacman -S git base-devel boost libevent python gmp
    git clone https://github.com/SBit-Project/sbit --recursive
    cd sbit/
    ./autogen.sh
    ./configure --disable-wallet --without-gui --without-miniupnpc
    make check
```

:::note
Enabling wallet support requires either compiling against a Berkeley DB newer than 4.8 (package `db`) using `--with-incompatible-bdb`,
or building and depending on a local version of Berkeley DB 4.8. The readily available Arch Linux packages are currently built using
`--with-incompatible-bdb` according to the [PKGBUILD](https://projects.archlinux.org/svntogit/community.git/tree/bitcoin/trunk/PKGBUILD).
As mentioned above, when maintaining portability of the wallet between the standard Sbit Core distributions and independently built
node software is desired, Berkeley DB 4.8 must be used.
:::

ARM Cross-compilation
-------------------

These steps can be performed on, for example, an Ubuntu VM. The depends system
will also work on other Linux distributions, however the commands for
installing the toolchain will be different.

Make sure you install the build requirements mentioned above.
Then, install the toolchain and curl:

```bash
sudo apt-get install g++-arm-linux-gnueabihf curl
```

To build executables for ARM:

```bash
    cd depends
    make HOST=arm-linux-gnueabihf NO_QT=1
    cd ..
    ./autogen.sh
    ./configure --prefix=$PWD/depends/arm-linux-gnueabihf --enable-glibc-back-compat --enable-reduce-exports LDFLAGS=-static-libstdc++
    make
```

For further documentation on the depends system see [Depend](depend).
