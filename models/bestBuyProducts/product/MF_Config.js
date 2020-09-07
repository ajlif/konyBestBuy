define([],function(){
	var mappings = {
		"sku" : "sku",
		"name" : "name",
		"onSale" : "onSale",
		"regularPrice" : "regularPrice",
		"salePrice" : "salePrice",
		"customerReviewAverage" : "customerReviewAverage",
		"image" : "image",
		"thumbnailImage" : "thumbnailImage",
	};
	Object.freeze(mappings);
	
	var typings = {
		"sku" : "number",
		"name" : "string",
		"onSale" : "boolean",
		"regularPrice" : "number",
		"salePrice" : "number",
		"customerReviewAverage" : "number",
		"image" : "string",
		"thumbnailImage" : "string",
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
		tableName : "product"
	};
	Object.freeze(config);
	
	return config;
})
