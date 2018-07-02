var htmlToJson = require('html-to-json');

module.exports = {
    get: function (url) {
        var products = htmlToJson.request(url, {
            "products": ['.products-i', {
                "product-name": function ($productName) {
                    return $productName.find('.products-name').text();
                },
                "product-image": function ($productImage) {
                    return $productImage.find('.products-top img').attr('src')
                },
                "product-created": function ($productCreated) {
                    return $productCreated.find('.products-created').text()
                },
                "product-price": ['.products-price', {
                    "price-value": function ($priceValue) {
                        return $priceValue.find('.price-val').text()
                    },
                    "price-current": function ($priceCurrent) {
                        return $priceCurrent.find('.price-cur').text()
                    }
                }]
            }]
        });
        return products;
    },

    all: function () {
        var url = "http://tap.az/shops";
        var shops = htmlToJson.request(url, ['.shops-i', {
            "title": function ($title) {
                return $title.find('.shops-i--title').text()
            },
            "logo": function ($shopLogo) {
                var string = $shopLogo.find('.shops-i--logo').attr('style');
                string = string.replace('background-image: url(', '');
                string = string.replace(')', '')
                return string
            },
            "link": function ($shopLink) {
                return $shopLink.attr('href')
            },
            "description": function ($shopDesc) {
                return $shopDesc.find('.shops-i--description').text()
            },
            "contact": function ($shopContact) {
                return $shopContact.find('.shops-i--contact').text()
            },
            "ads-count": function ($adsCount) {
                return $adsCount.find('.shops-i--ads-count').text()
            }
        }]
        );
        return shops
    }
}