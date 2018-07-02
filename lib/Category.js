var htmlToJson = require('html-to-json');

module.exports = {
    get: function (url) {
        var category = htmlToJson.request(url, {
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
        return category;
    },

    all: function () {
        var url = "http://tap.az/";
        var categories = htmlToJson.request(url, {
            "categories": ['.header-subcategories-column', {
                "category": ['.header-subcategories-group', {
                    "name": function ($categoryName) {
                        return $categoryName.find('.header-subcategories-all-ads a b').text()
                    },
                    "count": function ($categoryCount) {
                        return $categoryCount.find('.header-subcategories-all-ads a span').text()
                    },
                    "category-link": function ($categoryLink) {
                        return $categoryLink.find('.header-subcategories-all-ads a').attr('href')
                    },
                    "sub-categories": ['.header-subcategories-columns--all-categories', {
                        "sub-category-name": function ($subCategoryName) {
                            return $subCategoryName.find('.primary-subcategories-i').text()
                        },
                        "sub-category-link": function ($subCategoryLink) {
                            return $subCategoryLink.find('.primary-subcategories-i').attr('href')
                        }
                    }]
                }],
            }]
        });
        return categories;
    }
}