define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function productSearchedRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	productSearchedRepository.prototype = Object.create(BaseRepository.prototype);
	productSearchedRepository.prototype.constructor = productSearchedRepository;

	//For Operation 'getProductsForSearchText' with service id 'getProductsForSearchText9934'
	productSearchedRepository.prototype.getProductsForSearchText = function(params,onCompletion){
		return productSearchedRepository.prototype.customVerb('getProductsForSearchText',params, onCompletion);
	};
	
	
	return productSearchedRepository;
})