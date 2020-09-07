define([], function() {
    /**
     * User defined presentation controller
     * @constructor
     * @extends kony.mvc.Presentation.BasePresenter
     */
    function Reviews_PresentationController() {
        kony.mvc.Presentation.BasePresenter.call(this);
    }

    inheritsFrom(Reviews_PresentationController, kony.mvc.Presentation.BasePresenter);

    /**
     * Overridden Method of kony.mvc.Presentation.BasePresenter
     * This method gets called when presentation controller gets initialized
     * @method
     */

  Reviews_PresentationController.prototype.initializePresentationController = function() {};

  
  Reviews_PresentationController.prototype.getReviews = function(idProducts) {
    var reviewsManager = applicationManager.getReviewsManager();
    reviewsManager.getReviews(idProducts, this.getReviewsSC,this.getReviewsEC);
  };

  Reviews_PresentationController.prototype.getReviewsSC = function(response) {
    var NavObj = applicationManager.getNavigationManager();
    NavObj.setCustomInfo("reviews", response);
    var ntf = new kony.mvc.Navigation("frmReviews");
	//var myObj = {data: response};
	ntf.navigate(response); 
    kony.application.dismissLoadingScreen();
    //NavObj.navigateTo("categories");
  };
  
  Reviews_PresentationController.prototype.getReviewsEC = function(errMsg) {
    var NavObj = applicationManager.getNavigationManager();
    NavObj.setCustomInfo("reviews",errMsg);
    alert("Data Not Available  ###### "+JSON.stringify(errMsg));
    //NavObj.navigateTo("categories");
  };

  

    return Reviews_PresentationController;
});