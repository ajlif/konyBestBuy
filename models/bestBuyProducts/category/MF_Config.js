define([],function(){
	var mappings = {
		"id" : "id",
		"name" : "name",
		"subCategory_name" : "subCategory_name",
		"subCategory_id" : "subCategory_id",
		"path_id" : "path_id",
		"path_name" : "path_name",
		"test" : "test",
	};
	Object.freeze(mappings);
	
	var typings = {
		"id" : "string",
		"name" : "string",
		"subCategory_name" : "string",
		"subCategory_id" : "string",
		"path_id" : "string",
		"path_name" : "string",
		"test" : "string",
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
		tableName : "category"
	};
	Object.freeze(config);
	
	return config;
})
