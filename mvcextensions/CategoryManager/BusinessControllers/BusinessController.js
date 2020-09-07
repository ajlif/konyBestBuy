define([], function () { 
    
    /**
     * User defined business controller
     * @constructor
     * @extends kony.mvc.Business.Controller
     */
    function CategoryBusinessController() { 

        kony.mvc.Business.Controller.call(this); 

    } 

    inheritsFrom(CategoryBusinessController, kony.mvc.Business.Controller); 

    /**
     * Overridden Method of kony.mvc.Business.Controller
     * This method gets called when business controller gets initialized
     * @method
     */
    CategoryBusinessController.prototype.initializeBusinessController = function() { 

    }; 

    /**
     * Overridden Method of kony.mvc.Business.Controller
     * This method gets called when business controller is told to execute a command
     * @method
     * @param {Object} kony.mvc.Business.Command Object
     */
	CategoryBusinessController.prototype.execute = function(command) { 

		kony.mvc.Business.Controller.prototype.execute.call(this, command);

	};
  
   // custom scritto da MB

  CategoryBusinessController.prototype.getCategories = function(idCategory,presentationSuccessCallback,presentationErrorCallback){
	
    //loading my model object
    //var categoryList =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getAllRepository();
    var categoryList =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("category");
    
    //In the below line getCategories is my customverb name to get the categories
    //let idCategory = "cat00000" ;
    categoryList.customVerb('getCategories', {"id": idCategory}, getcategoryCompletionCallback);

    function  getcategoryCompletionCallback(status,  data,  error) {
      //To get the service response handler
      var srh = applicationManager.getServiceResponseHandler();

      //Analyzing the data received from the backend using service response handler and after that it returns an object
      var obj = srh.manageResponse(status, data, error);
      var finalObject = {} ;
      //	obj={"status":true,"data":response};

      //alert("Data from business controller... " + JSON.stringify(data));
      if (obj["status"] === true) {
        
         finalObject["category"] = obj["data"];
        //call to get the subcategories 
        categoryList.customVerb('getSubCategories', {"id": idCategory}, getSubcategoryCompletionCallback);
        
        function  getSubcategoryCompletionCallback(status,  data,  error) {
      		var srh = applicationManager.getServiceResponseHandler();
      		var objSubCategories = srh.manageResponse(status, data, error);
      		//alert("Data from business controller... " + JSON.stringify(data));
            if (obj["status"] === true) {
              finalObject["subcategories"] = objSubCategories["data"] ;
              
              //alert("Data from business controller... " + JSON.stringify(finalObject));
              presentationSuccessCallback(finalObject);
            } else {
              presentationErrorCallback(objSubCategories["errmsg"]);
            } 
    	}
        
        //presentationSuccessCallback(obj["data"]);
        
      } else {
        presentationErrorCallback(obj["errmsg"]);
      } 
    }
    
  };
  
    return CategoryBusinessController;

});