define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "review", "objectService" : "bestBuyProducts"};
	
	var setterFunctions = {
		sku : function(val, state){
			context["field"]  = "sku";
			context["metadata"] = (objectMetadata ? objectMetadata["sku"] : null);
			state['sku'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		id : function(val, state){
			context["field"]  = "id";
			context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
			state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		reviewer_name : function(val, state){
			context["field"]  = "reviewer_name";
			context["metadata"] = (objectMetadata ? objectMetadata["reviewer_name"] : null);
			state['reviewer_name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		title : function(val, state){
			context["field"]  = "title";
			context["metadata"] = (objectMetadata ? objectMetadata["title"] : null);
			state['title'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		comment : function(val, state){
			context["field"]  = "comment";
			context["metadata"] = (objectMetadata ? objectMetadata["comment"] : null);
			state['comment'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		rating : function(val, state){
			context["field"]  = "rating";
			context["metadata"] = (objectMetadata ? objectMetadata["rating"] : null);
			state['rating'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function review(defaultValues){
		var privateState = {};
			context["field"]  = "sku";
			context["metadata"] = (objectMetadata ? objectMetadata["sku"] : null);
			privateState.sku = defaultValues?(defaultValues["sku"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sku"], context):null):null;
			context["field"]  = "id";
			context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
			privateState.id = defaultValues?(defaultValues["id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context):null):null;
			context["field"]  = "reviewer_name";
			context["metadata"] = (objectMetadata ? objectMetadata["reviewer_name"] : null);
			privateState.reviewer_name = defaultValues?(defaultValues["reviewer_name"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["reviewer_name"], context):null):null;
			context["field"]  = "title";
			context["metadata"] = (objectMetadata ? objectMetadata["title"] : null);
			privateState.title = defaultValues?(defaultValues["title"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["title"], context):null):null;
			context["field"]  = "comment";
			context["metadata"] = (objectMetadata ? objectMetadata["comment"] : null);
			privateState.comment = defaultValues?(defaultValues["comment"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["comment"], context):null):null;
			context["field"]  = "rating";
			context["metadata"] = (objectMetadata ? objectMetadata["rating"] : null);
			privateState.rating = defaultValues?(defaultValues["rating"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["rating"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"sku" : {
					get : function(){
						context["field"]  = "sku";
			        	context["metadata"] = (objectMetadata ? objectMetadata["sku"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.sku, context);},
					set : function(val){
						setterFunctions['sku'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"id" : {
					get : function(){
						context["field"]  = "id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id, context);},
					set : function(val){
						setterFunctions['id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"reviewer_name" : {
					get : function(){
						context["field"]  = "reviewer_name";
			        	context["metadata"] = (objectMetadata ? objectMetadata["reviewer_name"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.reviewer_name, context);},
					set : function(val){
						setterFunctions['reviewer_name'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"title" : {
					get : function(){
						context["field"]  = "title";
			        	context["metadata"] = (objectMetadata ? objectMetadata["title"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.title, context);},
					set : function(val){
						setterFunctions['title'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"comment" : {
					get : function(){
						context["field"]  = "comment";
			        	context["metadata"] = (objectMetadata ? objectMetadata["comment"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.comment, context);},
					set : function(val){
						setterFunctions['comment'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"rating" : {
					get : function(){
						context["field"]  = "rating";
			        	context["metadata"] = (objectMetadata ? objectMetadata["rating"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.rating, context);},
					set : function(val){
						setterFunctions['rating'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});
			
			//converts model object to json object.
			this.toJsonInternal = function() {
				return Object.assign({}, privateState);
			};

			//overwrites object state with provided json value in argument.
			this.fromJsonInternal = function(value) {
									privateState.sku = value?(value["sku"]?value["sku"]:null):null;
					privateState.id = value?(value["id"]?value["id"]:null):null;
					privateState.reviewer_name = value?(value["reviewer_name"]?value["reviewer_name"]:null):null;
					privateState.title = value?(value["title"]?value["title"]:null):null;
					privateState.comment = value?(value["comment"]?value["comment"]:null):null;
					privateState.rating = value?(value["rating"]?value["rating"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(review);
	
	//Create new class level validator object
	BaseModel.Validator.call(review);
	
	var registerValidatorBackup = review.registerValidator;
	
	review.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( review.isValid(this, propName, val) ){
					return setterBackup.apply(null, arguments);
				}else{
					throw Error("Validation failed for "+ propName +" : "+val);
				}
			}
			setterFunctions[arguments[0]].changed = true;
		}
		return registerValidatorBackup.apply(null, arguments);
	}
	
	//Extending Model for custom operations
	//For Operation 'getUserReviewsForProduct' with service id 'getUserReviewsForProduct8335'
	review.getUserReviewsForProduct = function(params, onCompletion){
		return review.customVerb('getUserReviewsForProduct', params, onCompletion);
	};
	
	var relations = [
	];
	
	review.relations = relations;
	
	review.prototype.isValid = function(){
		return review.isValid(this);
	};
	
	review.prototype.objModelName = "review";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	review.registerProcessors = function(options, successCallback, failureCallback) {
	
		if(!options) {
			options = {};
		}
			
		if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
			preProcessorCallback = options["preProcessor"];
		}
		
		if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])){
			postProcessorCallback = options["postProcessor"];
		}
		
		function metaDataSuccess(res) {
			objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
			successCallback();
		}
		
		function metaDataFailure(err) {
			failureCallback(err);
		}
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("bestBuyProducts", "review", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	review.clone = function(objectToClone) {
		var clonedObj = new review();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return review;
});