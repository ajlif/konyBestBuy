define([], function() {
    /**
     * User defined presentation controller
     * @constructor
     * @extends kony.mvc.Presentation.BasePresenter
     */
    function AccountsPresentationController() {
        kony.mvc.Presentation.BasePresenter.call(this);
    }

    inheritsFrom(AccountsPresentationController, kony.mvc.Presentation.BasePresenter);

    /**
     * Overridden Method of kony.mvc.Presentation.BasePresenter
     * This method gets called when presentation controller gets initialized
     * @method
     */
    AccountsPresentationController.prototype.initializePresentationController = function() {
        
    };
  
  
  // custom, scritto da MB
  
    AccountsPresentationController.prototype.getAccountsAndShowHome = function() {
       var accountManager = applicationManager.getAccountsManager();
      accountManager.getAccounts(this.getAccountsSC,this.getAccountsEC);
    };
  
   AccountsPresentationController.prototype.getAccountsSC = function(response){
    var accNavObj = applicationManager.getNavigationManager();
    //alert("Response at Account_PC . "+JSON.stringify(response));
    accNavObj.setCustomInfo("frmHome",response);
    accNavObj.navigateTo("frmHome");

  };

  AccountsPresentationController.prototype.getAccountsEC = function(errMsg){
    var accNavObj = applicationManager.getNavigationManager();
    accNavObj.setCustomInfo("frmHome",errMsg);
    alert("Data Not Available  ###### "+JSON.stringify(errMsg));
    accNavObj.navigateTo("frmHome");
  };

    return AccountsPresentationController;
});