define([], function () { 

  /**
     * User defined business controller
     * @constructor
     * @extends kony.mvc.Business.Controller
     */
  function AccountsBusinessController() { 

    kony.mvc.Business.Controller.call(this); 

  } 

  inheritsFrom(AccountsBusinessController, kony.mvc.Business.Controller); 

  /**
     * Overridden Method of kony.mvc.Business.Controller
     * This method gets called when business controller gets initialized
     * @method
     */
  AccountsBusinessController.prototype.initializeBusinessController = function() { 

  }; 

  /**
     * Overridden Method of kony.mvc.Business.Controller
     * This method gets called when business controller is told to execute a command
     * @method
     * @param {Object} kony.mvc.Business.Command Object
     */
  AccountsBusinessController.prototype.execute = function(command) { 

    kony.mvc.Business.Controller.prototype.execute.call(this, command);

  };



  // custom scritto da MB

  AccountsBusinessController.prototype.getAccounts = function(presentationSuccessCallback,presentationErrorCallback){

    //loading my model object
    var accountList =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("account");

    //In the below line getAccounts is my customverb name to get the accounts
    accountList.customVerb('getAccounts', {}, getAccountsCompletionCallback);

    function  getAccountsCompletionCallback(status,  data,  error) {
      //To get the service response handler
      var srh = applicationManager.getServiceResponseHandler();

      //Analyzing the data received from the backend using service response handler and after that it returns an object
      var obj = srh.manageResponse(status, data, error);
      //	obj={"status":true,"data":response};

      kony.print("Data from getAccounts ... "+JSON.stringify(obj));
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      } else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };

  return AccountsBusinessController;

});