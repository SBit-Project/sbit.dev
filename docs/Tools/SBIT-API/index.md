---
title: Sbit Explorer API Documentation
description: Sbit explorer API Documentation 
keywords: [sbit, api, explorer, tools]
---

## API Endpoint
* `https://mainnet.sbit.dev/api/` for mainnet
* `https://testnet.sbit.dev/api/` for testnet


## Pagination Parameters

You may use one of 3 forms below, all indices count from 0, maximum 100 records per page:
* `limit=20&offset=40`
* `from=40&to=59`
* `pageSize=20&page=2`


## Block / Timestamp Filter Parameters

These params are available in some transaction list queries,
records are picked only when `fromBlock <= blockHeight <= toBlock`, `fromTime <= blockTimestamp <= toTime`.

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>fromBlock</code></td>
            <td>Number (optional)</td>
            <td>Search blocks from height</td>
        </tr>
        <tr>
            <td><code>toBlock</code></td>
            <td>Number (optional)</td>
            <td>Search blocks until height</td>
        </tr>
        <tr>
            <td><code>fromTime</code></td>
            <td>ISO 8601 Date String (optional)</td>
            <td>Search blocks from timestamp</td>
        </tr>
        <tr>
            <td><code>toTime</code></td>
            <td>ISO 8601 Date String (optional)</td>
            <td>Search blocks until timestamp</td>
        </tr>
    </tbody>
</table>
