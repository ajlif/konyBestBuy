define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "product", "objectService" : "bestBuyProducts"};
	
	var setterFunctions = {
		sku : function(val, state){
			context["field"]  = "sku";
			context["metadata"] = (objectMetadata ? objectMetadata["sku"] : null);
			state['sku'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		name : function(val, state){
			context["field"]  = "name";
			context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
			state['name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		onSale : function(val, state){
			context["field"]  = "onSale";
			context["metadata"] = (objectMetadata ? objectMetadata["onSale"] : null);
			state['onSale'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		regularPrice : function(val, state){
			context["field"]  = "regularPrice";
			context["metadata"] = (objectMetadata ? objectMetadata["regularPrice"] : null);
			state['regularPrice'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		salePrice : function(val, state){
			context["field"]  = "salePrice";
			context["metadata"] = (objectMetadata ? objectMetadata["salePrice"] : null);
			state['salePrice'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		customerReviewAverage : function(val, state){
			context["field"]  = "customerReviewAverage";
			context["metadata"] = (objectMetadata ? objectMetadata["customerReviewAverage"] : null);
			state['customerReviewAverage'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		image : function(val, state){
			context["field"]  = "image";
			context["metadata"] = (objectMetadata ? objectMetadata["image"] : null);
			state['image'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		thumbnailImage : function(val, state){
			context["field"]  = "thumbnailImage";
			context["metadata"] = (objectMetadata ? objectMetadata["thumbnailImage"] : null);
			state['thumbnailImage'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function product(defaultValues){
		var privateState = {};
			context["field"]  = "sku";
			context["metadata"] = (objectMetadata ? objectMetadata["sku"] : null);
			privateState.sku = defaultValues?(defaultValues["sku"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sku"], context):null):null;
			context["field"]  = "name";
			context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
			privateState.name = defaultValues?(defaultValues["name"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["name"], context):null):null;
			context["field"]  = "onSale";
			context["metadata"] = (objectMetadata ? objectMetadata["onSale"] : null);
			privateState.onSale = defaultValues?(defaultValues["onSale"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["onSale"], context):null):null;
			context["field"]  = "regularPrice";
			context["metadata"] = (objectMetadata ? objectMetadata["regularPrice"] : null);
			privateState.regularPrice = defaultValues?(defaultValues["regularPrice"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["regularPrice"], context):null):null;
			context["field"]  = "salePrice";
			context["metadata"] = (objectMetadata ? objectMetadata["salePrice"] : null);
			privateState.salePrice = defaultValues?(defaultValues["salePrice"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["salePrice"], context):null):null;
			context["field"]  = "customerReviewAverage";
			context["metadata"] = (objectMetadata ? objectMetadata["customerReviewAverage"] : null);
			privateState.customerReviewAverage = defaultValues?(defaultValues["customerReviewAverage"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["customerReviewAverage"], context):null):null;
			context["field"]  = "image";
			context["metadata"] = (objectMetadata ? objectMetadata["image"] : null);
			privateState.image = defaultValues?(defaultValues["image"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["image"], context):null):null;
			context["field"]  = "thumbnailImage";
			context["metadata"] = (objectMetadata ? objectMetadata["thumbnailImage"] : null);
			privateState.thumbnailImage = defaultValues?(defaultValues["thumbnailImage"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["thumbnailImage"], context):null):null;
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
				"name" : {
					get : function(){
						context["field"]  = "name";
			        	context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.name, context);},
					set : function(val){
						setterFunctions['name'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"onSale" : {
					get : function(){
						context["field"]  = "onSale";
			        	context["metadata"] = (objectMetadata ? objectMetadata["onSale"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.onSale, context);},
					set : function(val){
						setterFunctions['onSale'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"regularPrice" : {
					get : function(){
						context["field"]  = "regularPrice";
			        	context["metadata"] = (objectMetadata ? objectMetadata["regularPrice"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.regularPrice, context);},
					set : function(val){
						setterFunctions['regularPrice'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"salePrice" : {
					get : function(){
						context["field"]  = "salePrice";
			        	context["metadata"] = (objectMetadata ? objectMetadata["salePrice"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.salePrice, context);},
					set : function(val){
						setterFunctions['salePrice'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"customerReviewAverage" : {
					get : function(){
						context["field"]  = "customerReviewAverage";
			        	context["metadata"] = (objectMetadata ? objectMetadata["customerReviewAverage"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.customerReviewAverage, context);},
					set : function(val){
						setterFunctions['customerReviewAverage'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"image" : {
					get : function(){
						context["field"]  = "image";
			        	context["metadata"] = (objectMetadata ? objectMetadata["image"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.image, context);},
					set : function(val){
						setterFunctions['image'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"thumbnailImage" : {
					get : function(){
						context["field"]  = "thumbnailImage";
			        	context["metadata"] = (objectMetadata ? objectMetadata["thumbnailImage"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.thumbnailImage, context);},
					set : function(val){
						setterFunctions['thumbnailImage'].call(this,val,privateState);
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
					privateState.name = value?(value["name"]?value["name"]:null):null;
					privateState.onSale = value?(value["onSale"]?value["onSale"]:null):null;
					privateState.regularPrice = value?(value["regularPrice"]?value["regularPrice"]:null):null;
					privateState.salePrice = value?(value["salePrice"]?value["salePrice"]:null):null;
					privateState.customerReviewAverage = value?(value["customerReviewAverage"]?value["customerReviewAverage"]:null):null;
					privateState.image = value?(value["image"]?value["image"]:null):null;
					privateState.thumbnailImage = value?(value["thumbnailImage"]?value["thumbnailImage"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(product);
	
	//Create new class level validator object
	BaseModel.Validator.call(product);
	
	var registerValidatorBackup = product.registerValidator;
	
	product.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( product.isValid(this, propName, val) ){
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
	//For Operation 'getProductsForCategories' with service id 'getProductsForCategories3519'
	product.getProductsForCategories = function(params, onCompletion){
		return product.customVerb('getProductsForCategories', params, onCompletion);
	};
	//For Operation 'test' with service id 'getProductsForSearchText2372'
	product.test = function(params, onCompletion){
		return product.customVerb('test', params, onCompletion);
	};
	//For Operation 'getProductsForSearch' with service id 'getProductsForSearchText8463'
	product.getProductsForSearch = function(params, onCompletion){
		return product.customVerb('getProductsForSearch', params, onCompletion);
	};
	//For Operation 'getProducts' with service id 'getProductsForCategories3922'
	product.getProducts = function(params, onCompletion){
		return product.customVerb('getProducts', params, onCompletion);
	};
	//For Operation 'getProductsForSearchText' with service id 'getProductsForSearchText1481'
	product.getProductsForSearchText = function(params, onCompletion){
		return product.customVerb('getProductsForSearchText', params, onCompletion);
	};
	
	var relations = [
	];
	
	product.relations = relations;
	
	product.prototype.isValid = function(){
		return product.isValid(this);
	};
	
	product.prototype.objModelName = "product";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	product.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("bestBuyProducts", "product", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	product.clone = function(objectToClone) {
		var clonedObj = new product();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return product;
});