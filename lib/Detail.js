var htmlToJson = require('html-to-json').request;

module.exports = function (url) {
    var detail = htmlToJson(url, {
        'title': function ($title) {
            return $title.find('.title-container h1').text();
        },
        'price': ['.middle', {
            "price-val": function ($value) {
                return $value.find('.price-val').text();
            },
            'price-cur': function ($current) {
                return $current.find('.price-cur').text();
            }
        }],
        'property': ['.property', {
            'property-name': function ($propertyName) {
                return $propertyName.find('.property-name').text();
            },
            'property-value': function ($propertyValue) {
                return $propertyValue.find('.property-value').text();
            }
        }],
        "author": ['.author', {
            "name": function ($name) {
                return $name.find('.name').text();
            },
            "phones": ['.phone', function name($phone) {
                return $phone.attr('href');
            }],
            'contact-all-lots': function ($contactAllLots) {
                return $contactAllLots.find('.all-lots a').attr('href');
            }
        }],
        "product-info": ['.lot-info p', function ($productInfo) {
            return $productInfo.text()
        }],
        "description": function ($description) {
            return $description.find('.lot-text p').text();
        },
        "image-large": function ($largeImage) {
            return $largeImage.find('img').attr('src');
        },
        "thumbnail-image-count": function ($imageCount) {
            return $imageCount.find('.photos .thumbnails').attr('data-count');
        },
        "thumbnail-images": ['.thumbnails a', function ($thumbnails) {
            return $thumbnails.attr('href');
        }]
    })
    return detail;
}