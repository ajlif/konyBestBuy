/**
  *@module ApplicationManager
  */
define([], function() {
  /**
  * ApplicationManager is an implementation of managers in the project
  *@alias module:ApplicationManager
  *@class
  */

function ApplicationManager(){
  /**@member {object} applicationManagerInstance Contains instance of application manager*/
  /**@member {object} HashTable Contains instance of Hashtable*/
  /**@member {object} serviceResponseHandler Contains instance of serviceResponseHandler*/
    this.applicationManagerInstance= null;
    this.HashTable= null;
    this.serviceResponseHandler = null;
  /**   numberOfAsyncForPreAppInit
          *  1.getApplicationProperties
          *  2.getProducts
            */
    //this.numberOfAsyncForPreAppInit=2;
};


  
/**
  * returns PresentationUtility object 
  * @returns {object} value gives PresentationUtility object 
  */
ApplicationManager.prototype.getPresentationUtility = function(){
   return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('PresentationUtility').businessController;
};

/**
  * returns PresentationInterruptHandler object 
  * @returns {object} value gives PresentationInterruptHandler object 
  */
ApplicationManager.prototype.getPresentationInterruptHandler = function(){
   return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('PresentationInterruptHandler').businessController;
};
  

/**
  * Returns ApplicationManager object, creates new if doesn't exist.
  * @returns {object} value gives PresentationFormUtility object 
  */  
ApplicationManager.getApplicationManager = function(){
  if (!this.applicationManagerInstance) 
	  this.applicationManagerInstance = new ApplicationManager();
    return this.applicationManagerInstance;
};
  
/**
  * Returns ServiceResponseHandler object, creates new if doesn't exist.
  * @returns {object} value gives ServiceResponseHandler object 
  */
ApplicationManager.prototype.getServiceResponseHandler = function() {
	if (!this.serviceResponseHandler) {
		var ServiceResponseHandler = require('ServiceResponseHandler');
		this.serviceResponseHandler = new ServiceResponseHandler();
	}
	return this.serviceResponseHandler;
};
  

/**
  * returns NavigationManager object 
  * @returns {object} value gives NavigationManager object 
  */  
ApplicationManager.prototype.getNavigationManager = function() {
	return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('NavigationManager').businessController;
};

  
/**
  * Returns HashTable object, creates new if doesn't exist.
  * @returns {object} value gives HashTable object 
  */
ApplicationManager.prototype.getHashTable = function() {
	if (!this.HashTable) {
		var HashTable = require('HashTable');
		this.HashTable = new HashTable();
	}
	return this.HashTable;
};
  
/**
  * returns LoggerManager object 
  * @returns {object} value gives LoggerManager object 
  */
ApplicationManager.prototype.getLoggerManager = function() {
	return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('LoggerManager').businessController;
};
  
ApplicationManager.prototype.getCategoryManager = function() {
	return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('CategoryManager').businessController;
};
  
ApplicationManager.prototype.getProductsManager = function() {
	return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ProductsManager').businessController;
};
  
ApplicationManager.prototype.getReviewsManager = function() {
	return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ReviewsManager').businessController;
};
  
 ApplicationManager.prototype.getSearchProductsManager = function() {
	return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('SearchProductsManager').businessController;
};
/**
  * returns AsyncManager object 
  * @returns {object} value gives AsyncManager object 
  */
ApplicationManager.prototype.getAsyncManager = function() {
   return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('AsyncManager').businessController;
};

ApplicationManager.prototype.getModule = function(moduleName)
{  
  if(typeof moduleName === 'string' || moduleName instanceof String){
    var channel = kony.sdk.getChannelType();
    if(channel === "tablet"){
      return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule(moduleName,"Tablet");
    }
    else{
      return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule(moduleName);
    }
  } 
};
return ApplicationManager;
});