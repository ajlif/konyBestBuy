define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function subCategoryRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	subCategoryRepository.prototype = Object.create(BaseRepository.prototype);
	subCategoryRepository.prototype.constructor = subCategoryRepository;

	//For Operation 'getSubCategories' with service id 'getCategories9428'
	subCategoryRepository.prototype.getSubCategories = function(params,onCompletion){
		return subCategoryRepository.prototype.customVerb('getSubCategories',params, onCompletion);
	};
	
	
	return subCategoryRepository;
})