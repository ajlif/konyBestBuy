define([],function(){
	var mappings = {
		"id" : "id",
		"name" : "name",
	};
	Object.freeze(mappings);
	
	var typings = {
		"id" : "string",
		"name" : "string",
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
		tableName : "subCategory"
	};
	Object.freeze(config);
	
	return config;
})
