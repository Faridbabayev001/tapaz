# Tap.az Spider

This is a spider for [Tap.az](http://tap.az/) written in Node.

## Install

```sh
npm install tapazz --save
```

## Features

*   Get Shop List
*   Get Shop
*   Get Category List
*   Get Category
*   Get Item Detail

## Usage

### Get [Shop](http://tap.az/shops) List

```javascript
var tapaz = require('tapazz');

tapaz.Shop.all().then(function(shops) {
    console.log(shops)
});
```

### Get Shop

```javascript
var tapaz = require('tapazz');

tapaz.Shop.get(url).then(function(shop) {
    console.log(shop)
});
```

### Get [Category](http://tap.az) List

```javascript
var tapaz = require('tapazz');

tapaz.Category.all().then(function(categories) {
    console.log(categories)
});
```

### Get Category

```javascript
var tapaz = require('tapazz');

tapaz.Category.get(url).then(function(category) {
    console.log(category)
});
```

### Get Good Detail

```javascript
var tapaz = require('tapazz');

tapaz.Detail(url).then(function (detail) {
    console.log(detail);
});
```