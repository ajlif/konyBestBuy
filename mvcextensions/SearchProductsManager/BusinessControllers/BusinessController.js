define([], function () {

 /**
    * User defined business controller
    * @constructor
    * @extends kony.mvc.Business.Controller
    */
 function SearchProductsBusinessController() {

   kony.mvc.Business.Controller.call(this);

 }

 inheritsFrom(SearchProductsBusinessController, kony.mvc.Business.Controller);

 /**
    * Overridden Method of kony.mvc.Business.Controller
    * This method gets called when business controller gets initialized
    * @method
    */
 SearchProductsBusinessController.prototype.initializeBusinessController = function() {

 };

 /**
    * Overridden Method of kony.mvc.Business.Controller
    * This method gets called when business controller is told to execute a command
    * @method
    * @param {Object} kony.mvc.Business.Command Object
    */
 SearchProductsBusinessController.prototype.execute = function(command) {

   kony.mvc.Business.Controller.prototype.execute.call(this, command);

 };


 SearchProductsBusinessController.prototype.getSearchProducts = function(searchText,presentationSuccessCallback,presentationErrorCallback){

   //loading my model object
   //var productsList =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getAllRepository();
   //var promise = new Promise(function(resolve, reject) {  });// promise
   var searchProductsList =   kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("product"); //productSearched

   //In the below line getCategories is my customverb name to get the categories
   var pageNumber = 1 ;
   /*
   if (typeof searchText === 'string'){
     alert("search "+ searchText);
   }*/

   searchProductsList.customVerb('getProductsForSearchText', { "search": searchText ,"page" : pageNumber }, getSearchProductsCompletionCallback);
   
   //test
   // var idCategoryTest = "abcat0706000" ; //abcat0706002 //pcmcat258100050018
   // searchProductsList.customVerb('getProducts', {"categoryPath_id": searchText ,"page" : pageNumber }, getSearchProductsCompletionCallback);

   function getSearchProductsCompletionCallback(status,  data,  error) {
     //To get the service response handler
	//alert("data: "+JSON.stringify(data)+" status: "+JSON.stringify(status)+" error: "+JSON.stringify(error));
     var srh = applicationManager.getServiceResponseHandler();

     //Analyzing the data received from the backend using service response handler and after that it returns an object
     var obj = srh.manageResponse(status, data, error);
     // obj={"status":true,"data":response};
     //alert("object from business ",JSON.stringify(obj));
     if (true) {
       //presentationSuccessCallback(data);
       presentationSuccessCallback(data);
     }
     else {
       presentationErrorCallback(obj);
     }
   }

 };



 return SearchProductsBusinessController;

});