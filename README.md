# Tap.az Spider

This is a spider for [Tap.az](http://tap.az/) written in Node.

## Install

```sh
npm install tapaz --save
```

## Features

*   Get Shop List
*   Get Item Detail

## Usage

### Get [Shop](http://tap.az/shops) List

```javascript
var tapaz = require('tapaz');

tapaz.Shop.all().then(function(shops) {
    console.log(shops)
});
```

### Get Good Detail

```javascript
var tapaz = require('tapaz');

tapaz.Detail(url).then(function (detail) {
    console.log(detail);
});
```