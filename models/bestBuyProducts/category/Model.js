define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "category", "objectService" : "bestBuyProducts"};
	
	var setterFunctions = {
		id : function(val, state){
			context["field"]  = "id";
			context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
			state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		name : function(val, state){
			context["field"]  = "name";
			context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
			state['name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		subCategory_name : function(val, state){
			context["field"]  = "subCategory_name";
			context["metadata"] = (objectMetadata ? objectMetadata["subCategory_name"] : null);
			state['subCategory_name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		subCategory_id : function(val, state){
			context["field"]  = "subCategory_id";
			context["metadata"] = (objectMetadata ? objectMetadata["subCategory_id"] : null);
			state['subCategory_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		path_id : function(val, state){
			context["field"]  = "path_id";
			context["metadata"] = (objectMetadata ? objectMetadata["path_id"] : null);
			state['path_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		path_name : function(val, state){
			context["field"]  = "path_name";
			context["metadata"] = (objectMetadata ? objectMetadata["path_name"] : null);
			state['path_name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		test : function(val, state){
			context["field"]  = "test";
			context["metadata"] = (objectMetadata ? objectMetadata["test"] : null);
			state['test'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function category(defaultValues){
		var privateState = {};
			context["field"]  = "id";
			context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
			privateState.id = defaultValues?(defaultValues["id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context):null):null;
			context["field"]  = "name";
			context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
			privateState.name = defaultValues?(defaultValues["name"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["name"], context):null):null;
			context["field"]  = "subCategory_name";
			context["metadata"] = (objectMetadata ? objectMetadata["subCategory_name"] : null);
			privateState.subCategory_name = defaultValues?(defaultValues["subCategory_name"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["subCategory_name"], context):null):null;
			context["field"]  = "subCategory_id";
			context["metadata"] = (objectMetadata ? objectMetadata["subCategory_id"] : null);
			privateState.subCategory_id = defaultValues?(defaultValues["subCategory_id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["subCategory_id"], context):null):null;
			context["field"]  = "path_id";
			context["metadata"] = (objectMetadata ? objectMetadata["path_id"] : null);
			privateState.path_id = defaultValues?(defaultValues["path_id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["path_id"], context):null):null;
			context["field"]  = "path_name";
			context["metadata"] = (objectMetadata ? objectMetadata["path_name"] : null);
			privateState.path_name = defaultValues?(defaultValues["path_name"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["path_name"], context):null):null;
			context["field"]  = "test";
			context["metadata"] = (objectMetadata ? objectMetadata["test"] : null);
			privateState.test = defaultValues?(defaultValues["test"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["test"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
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
				"subCategory_name" : {
					get : function(){
						context["field"]  = "subCategory_name";
			        	context["metadata"] = (objectMetadata ? objectMetadata["subCategory_name"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.subCategory_name, context);},
					set : function(val){
						setterFunctions['subCategory_name'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"subCategory_id" : {
					get : function(){
						context["field"]  = "subCategory_id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["subCategory_id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.subCategory_id, context);},
					set : function(val){
						setterFunctions['subCategory_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"path_id" : {
					get : function(){
						context["field"]  = "path_id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["path_id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.path_id, context);},
					set : function(val){
						setterFunctions['path_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"path_name" : {
					get : function(){
						context["field"]  = "path_name";
			        	context["metadata"] = (objectMetadata ? objectMetadata["path_name"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.path_name, context);},
					set : function(val){
						setterFunctions['path_name'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"test" : {
					get : function(){
						context["field"]  = "test";
			        	context["metadata"] = (objectMetadata ? objectMetadata["test"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.test, context);},
					set : function(val){
						setterFunctions['test'].call(this,val,privateState);
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
									privateState.id = value?(value["id"]?value["id"]:null):null;
					privateState.name = value?(value["name"]?value["name"]:null):null;
					privateState.subCategory_name = value?(value["subCategory_name"]?value["subCategory_name"]:null):null;
					privateState.subCategory_id = value?(value["subCategory_id"]?value["subCategory_id"]:null):null;
					privateState.path_id = value?(value["path_id"]?value["path_id"]:null):null;
					privateState.path_name = value?(value["path_name"]?value["path_name"]:null):null;
					privateState.test = value?(value["test"]?value["test"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(category);
	
	//Create new class level validator object
	BaseModel.Validator.call(category);
	
	var registerValidatorBackup = category.registerValidator;
	
	category.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( category.isValid(this, propName, val) ){
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
	//For Operation 'getCategories' with service id 'getCategories2948'
	category.getCategories = function(params, onCompletion){
		return category.customVerb('getCategories', params, onCompletion);
	};
	//For Operation 'getSubCategories' with service id 'getCategories3861'
	category.getSubCategories = function(params, onCompletion){
		return category.customVerb('getSubCategories', params, onCompletion);
	};
	
	var relations = [
	];
	
	category.relations = relations;
	
	category.prototype.isValid = function(){
		return category.isValid(this);
	};
	
	category.prototype.objModelName = "category";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	category.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("bestBuyProducts", "category", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	category.clone = function(objectToClone) {
		var clonedObj = new category();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return category;
});