define([],function(){
	var mappings = {
		"sku" : "sku",
		"name" : "name",
		"image" : "image",
		"thumbnailImage" : "thumbnailImage",
		"onSale" : "onSale",
		"regularPrice" : "regularPrice",
		"salePrice" : "salePrice",
		"customerReviewAverage" : "customerReviewAverage",
	};
	Object.freeze(mappings);
	
	var typings = {
		"sku" : "number",
		"name" : "string",
		"image" : "string",
		"thumbnailImage" : "string",
		"onSale" : "boolean",
		"regularPrice" : "number",
		"salePrice" : "number",
		"customerReviewAverage" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"sku",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "bestBuyProducts",
		tableName : "productSearched"
	};
	Object.freeze(config);
	
	return config;
})
