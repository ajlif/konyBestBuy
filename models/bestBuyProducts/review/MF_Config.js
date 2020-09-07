define([],function(){
	var mappings = {
		"sku" : "sku",
		"id" : "id",
		"reviewer_name" : "reviewer_name",
		"title" : "title",
		"comment" : "comment",
		"rating" : "rating",
	};
	Object.freeze(mappings);
	
	var typings = {
		"sku" : "number",
		"id" : "number",
		"reviewer_name" : "string",
		"title" : "string",
		"comment" : "string",
		"rating" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "bestBuyProducts",
		tableName : "review"
	};
	Object.freeze(config);
	
	return config;
})
