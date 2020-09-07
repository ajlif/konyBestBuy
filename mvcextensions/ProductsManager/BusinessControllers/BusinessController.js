define([], function () { 
    
    /**
     * User defined business controller
     * @constructor
     * @extends kony.mvc.Business.Controller
     */
    function ProductsBusinessController() { 

        kony.mvc.Business.Controller.call(this); 

    } 

    inheritsFrom(ProductsBusinessController, kony.mvc.Business.Controller); 

    /**
     * Overridden Method of kony.mvc.Business.Controller
     * This method gets called when business controller gets initialized
     * @method
     */
    ProductsBusinessController.prototype.initializeBusinessController = function() { 

    }; 

    /**
     * Overridden Method of kony.mvc.Business.Controller
     * This method gets called when business controller is told to execute a command
     * @method
     * @param {Object} kony.mvc.Business.Command Object
     */
	ProductsBusinessController.prototype.execute = function(command) { 

		kony.mvc.Business.Controller.prototype.execute.call(this, command);

	};
  
  
     ProductsBusinessController.prototype.getProducts = function(idCategory,presentationSuccessCallback,presentationErrorCallback){
	
    //loading my model object
    //var productsList =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getAllRepository();
    //var promise = new Promise(function(resolve, reject) {  });// promise
    var productsList =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("product");
    
    //In the below line getCategories is my customverb name to get the categories
    var idCategoryTest = "pcmcat258100050018" ; //abcat0706002
    var pageNumber = 1 ;
    productsList.customVerb('getProducts', {"categoryPath_id": idCategory ,"page" : pageNumber }, getProductsCompletionCallback);

    function getProductsCompletionCallback(status,  data,  error) {
      //To get the service response handler
      var srh = applicationManager.getServiceResponseHandler();

      //Analyzing the data received from the backend using service response handler and after that it returns an object
      var obj = srh.manageResponse(status, data, error);
      //	obj={"status":true,"data":response};

      //alert("Data from business controller... " + JSON.stringify(data));
      if (obj["status"] === true) {
        //presentationSuccessCallback(data);
        presentationSuccessCallback(data);
      } 
      else {
        presentationErrorCallback(obj["errmsg"]);
      } 
    }
   
  };
                                 
                                 

    return ProductsBusinessController;

});