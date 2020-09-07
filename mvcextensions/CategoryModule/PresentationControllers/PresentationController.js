define([], function() {
    /**
     * User defined presentation controller
     * @constructor
     * @extends kony.mvc.Presentation.BasePresenter
     */
    function CategoryPresentationController() {
        kony.mvc.Presentation.BasePresenter.call(this);
    }

    inheritsFrom(CategoryPresentationController, kony.mvc.Presentation.BasePresenter);

    /**
     * Overridden Method of kony.mvc.Presentation.BasePresenter
     * This method gets called when presentation controller gets initialized
     * @method
     */
    CategoryPresentationController.prototype.initializePresentationController = function() {
        
    };
  
  // custom, scritto da MB
  
    CategoryPresentationController.prototype.getCategories = function(idCategory) {
      var categoryManager = applicationManager.getCategoryManager();
      categoryManager.getCategories(idCategory,this.getAccountsSC,this.getAccountsEC);
    };
  
   CategoryPresentationController.prototype.getAccountsSC = function(response){
    
    //alert("Response at presentation controller "+JSON.stringify(response));
    var ntf = new kony.mvc.Navigation("frmCategory");
	var myObj = {data: response};
    kony.application.dismissLoadingScreen();
	ntf.navigate(myObj); 
     
    //return response ;

  };

  CategoryPresentationController.prototype.getAccountsEC = function(errMsg){
    var accNavObj = applicationManager.getNavigationManager();
    accNavObj.setCustomInfo("dataCategory",errMsg);
    alert("Data Not Available  ###### "+JSON.stringify(errMsg));
    kony.application.dismissLoadingScreen();
    accNavObj.navigateTo("frmCategory");
    return errMsg ;
  };

    return CategoryPresentationController;
});