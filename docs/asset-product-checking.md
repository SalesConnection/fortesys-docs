---
sidebar_position: 3
authors: jay
title: Asset and Product Checking
---

# Asset and Product Checking

## Check Asset

Use the following API to check for the existance of an asset.

Given an asset name to filter, if the asset is not found, the result of this API will be empty.

### Request URL

/ext/api/v1/asset

### Request Method

GET

### Request Parameters

| Parameter | Type | Description |
| ---- | ---- | ---- |
| filter | json | (Optional) Filter object |
| filter.name | string | (Optional) Asset name |
| page | int | (Optional) Page number |

### Request Example

```
GET /ext/api/v1/asset?page=1&filter={"name":"XA1DTCHUK"}
```

### Response Parameters

| Parameter | Type | Description |
| ---- | ---- | ---- |
| data | [Asset](#asset-object)[] | List of [Asset](#asset-object) object |
| current_page | int | Current page number |
| per_page | int | Maximum number of assets per page |
| last_page | int | Last page number |
| total | int | Total number of assets |

#### Asset Object

| Parameter | Type | Description |
| ---- | ---- | ---- |
| id | string | Asset ID |
| name | string | Asset name |

### Response Example

```application/json
{
    "data": [
        {
            "id": "8AX9FQ==\\sFwIbxM=",
            "name": "XA1DTCHUK"
        }
    ],
    "current_page": 1,
    "per_page": 50,
    "last_page": 1,
    "total": 1
}
```

## Check Product


Use the following API to check for the existance of an product.

Given an product name to filter, if the product is not found, the result of this API will be empty.

### Request URL

/ext/api/v1/product

### Request Method

GET

### Request Parameters

| Parameter | Type | Description |
| ---- | ---- | ---- |
| filter | json | (Optional) Filter object |
| filter.name | string | (Optional) Product name |
| page | int | (Optional) Page number |

### Request Example

```
GET /ext/api/v1/product?page=1&filter={"name":"Central Firewall Reporting Advanced - 25-49 100GB BLOCKS - 12 MOS - RENEWAL"}
```

### Response Parameters

| Parameter | Type | Description |
| ---- | ---- | ---- |
| data | [Product](#product-object)[] | List of [Product](#product-object) object |
| current_page | int | Current page number |
| per_page | int | Maximum number of products per page |
| last_page | int | Last page number |
| total | int | Total number of products |

#### Product Object

| Parameter | Type | Description |
| ---- | ---- | ---- |
| id | string | Product ID |
| name | string | Product name |

### Response Example

```application/json
{
    "instruction": "Please make added as 1 if you want to add that product.",
    "data": [
        {
            "id": "ANi1\\nJSO/Js=",
            "name": "Central Firewall Reporting Advanced - 25-49 100GB BLOCKS - 12 MOS - RENEWAL",
            "added": 0,
            "quantity": 0,
            "unit_price": 0,
            "notes": ""
        }
    ],
    "current_page": 1,
    "per_page": 50,
    "last_page": 1,
    "total": 1
}
```
