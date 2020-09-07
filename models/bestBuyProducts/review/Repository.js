define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function reviewRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	reviewRepository.prototype = Object.create(BaseRepository.prototype);
	reviewRepository.prototype.constructor = reviewRepository;

	//For Operation 'getUserReviewsForProduct' with service id 'getUserReviewsForProduct8335'
	reviewRepository.prototype.getUserReviewsForProduct = function(params,onCompletion){
		return reviewRepository.prototype.customVerb('getUserReviewsForProduct',params, onCompletion);
	};
	
	
	return reviewRepository;
})