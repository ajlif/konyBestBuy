define([], function() {
    /**
     * User defined presentation controller
     * @constructor
     * @extends kony.mvc.Presentation.BasePresenter
     */
    function ProductsPresentationController() {
        kony.mvc.Presentation.BasePresenter.call(this);
    }

    inheritsFrom(ProductsPresentationController, kony.mvc.Presentation.BasePresenter);

    /**
     * Overridden Method of kony.mvc.Presentation.BasePresenter
     * This method gets called when presentation controller gets initialized
     * @method
     */
    ProductsPresentationController.prototype.initializePresentationController = function() {
        
    };
  
  
  // custom, scritto da MB
  
    ProductsPresentationController.prototype.getProducts = function(idCategory) {
      var productsManager = applicationManager.getProductsManager();
       //alert("id category from presentation "+idCategory);
      productsManager.getProducts(idCategory,this.getProductsSC,this.getProductsEC) ;
    };
  
   ProductsPresentationController.prototype.getProductsSC = function(response){
    
    //alert("Response at presentation controller "+JSON.stringify(response));
    var ntf = new kony.mvc.Navigation("frmProducts");
	//var myObj = {data: response};
	ntf.navigate(response); 
    kony.application.dismissLoadingScreen();
    //return response ;

  };

  ProductsPresentationController.prototype.getProductsEC = function(errMsg){
    var accNavObj = applicationManager.getNavigationManager();
    accNavObj.setCustomInfo("dataCategory",errMsg);
    alert("Error : "+JSON.stringify(errMsg));
    kony.application.dismissLoadingScreen();
    //accNavObj.navigateTo("frmCategory");
    return errMsg ;
  };

    return ProductsPresentationController;
});