define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function categoryRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	categoryRepository.prototype = Object.create(BaseRepository.prototype);
	categoryRepository.prototype.constructor = categoryRepository;

	//For Operation 'getCategories' with service id 'getCategories2948'
	categoryRepository.prototype.getCategories = function(params,onCompletion){
		return categoryRepository.prototype.customVerb('getCategories',params, onCompletion);
	};
	//For Operation 'getSubCategories' with service id 'getCategories3861'
	categoryRepository.prototype.getSubCategories = function(params,onCompletion){
		return categoryRepository.prototype.customVerb('getSubCategories',params, onCompletion);
	};
	
	
	return categoryRepository;
})