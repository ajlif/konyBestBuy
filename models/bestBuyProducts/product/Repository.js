define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function productRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	productRepository.prototype = Object.create(BaseRepository.prototype);
	productRepository.prototype.constructor = productRepository;

	//For Operation 'getProductsForCategories' with service id 'getProductsForCategories3519'
	productRepository.prototype.getProductsForCategories = function(params,onCompletion){
		return productRepository.prototype.customVerb('getProductsForCategories',params, onCompletion);
	};
	//For Operation 'test' with service id 'getProductsForSearchText2372'
	productRepository.prototype.test = function(params,onCompletion){
		return productRepository.prototype.customVerb('test',params, onCompletion);
	};
	//For Operation 'getProductsForSearch' with service id 'getProductsForSearchText8463'
	productRepository.prototype.getProductsForSearch = function(params,onCompletion){
		return productRepository.prototype.customVerb('getProductsForSearch',params, onCompletion);
	};
	//For Operation 'getProducts' with service id 'getProductsForCategories3922'
	productRepository.prototype.getProducts = function(params,onCompletion){
		return productRepository.prototype.customVerb('getProducts',params, onCompletion);
	};
	//For Operation 'getProductsForSearchText' with service id 'getProductsForSearchText1481'
	productRepository.prototype.getProductsForSearchText = function(params,onCompletion){
		return productRepository.prototype.customVerb('getProductsForSearchText',params, onCompletion);
	};
	
	
	return productRepository;
})