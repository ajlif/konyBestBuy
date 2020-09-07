define([], function() {
   /**
    * User defined presentation controller
    * @constructor
    * @extends kony.mvc.Presentation.BasePresenter
    */
   function SearchProductsPresentationController() {
       kony.mvc.Presentation.BasePresenter.call(this);
   }

   inheritsFrom(SearchProductsPresentationController, kony.mvc.Presentation.BasePresenter);

   /**
    * Overridden Method of kony.mvc.Presentation.BasePresenter
    * This method gets called when presentation controller gets initialized
    * @method
    */
   SearchProductsPresentationController.prototype.initializePresentationController = function() {
       
   };
 
 
 // custom, scritto da MB
 
   SearchProductsPresentationController.prototype.getSearchProducts = function(searchText) {
     var searchProductsManager = applicationManager.getSearchProductsManager();
     searchProductsManager.getSearchProducts(searchText, this.getSearchProductsSC,this.getSearchProductsEC) ;
   };
 
  SearchProductsPresentationController.prototype.getSearchProductsSC = function(response){
   
   //alert("Response at presentation controller "+JSON.stringify(response));
   var ntf = new kony.mvc.Navigation("frmSearchProducts");
//var myObj = {data: response};
   ntf.navigate(response);
   kony.application.dismissLoadingScreen();
   //return response ;

 };

 SearchProductsPresentationController.prototype.getSearchProductsEC = function(errMsg){
   var accNavObj = applicationManager.getNavigationManager();
   accNavObj.setCustomInfo("searchProducts",errMsg);
   alert("Error : "+JSON.stringify(errMsg));
   kony.application.dismissLoadingScreen();
   //accNavObj.navigateTo("frmCategory");
   return errMsg ;
 };

   return SearchProductsPresentationController;
});